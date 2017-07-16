using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace bomremover
{
	class Program
	{

		private static string _searchPattern;
		private static List<string> _checkList = new List<string>(); 
		
		static void Main(string[] args)
		{
			if (args.Length != 2)
			{
                String filename = Path.GetFileName(System.Reflection.Assembly.GetEntryAssembly().Location);
                Console.WriteLine("Usage: {0} [basedirectory] [filesearchpattern]", filename);
                Console.WriteLine("i.e.: {0} C:\\work\\project *.java", filename);
				return;
			}

			var baseDirectory = args[0];
			var searchPattern = args[1];

			_searchPattern = searchPattern;

			AddFilesFromFolderToDeleteListRecursive(baseDirectory);

			if (_checkList.Count == 0)
			{
				Console.WriteLine("No matching file found. Press Enter to Exit...");
				Console.ReadLine();
				return;
			}

			Console.WriteLine("Press enter to process all files in the list. ({0} files in total)", _checkList.Count);

			Console.ReadLine();

			DeleteFilesFromDeleteList();

			Console.WriteLine("Finished. Press Enter to Exit");

			Console.ReadLine();
		}

		private static void DeleteFilesFromDeleteList()
		{
			foreach (var f in _checkList)
			{
				try
				{
					Console.WriteLine("Processing file '{0}'...", f);
                    byte[] content = File.ReadAllBytes(f);

    
                    byte[] newArray = new byte[content.Length - 3];
                    Array.Copy(content, 3, newArray, 0, newArray.Length);


                    File.WriteAllBytes(f, newArray);
				}
				catch (Exception ex)
				{
					Console.WriteLine("Could not replace file '{0}': {1}", f, ex.ToString());
				}
			}
		}

		private static void AddFilesFromFolderToDeleteListRecursive(string basedir)
		{
			foreach (var d in Directory.GetDirectories(basedir))
			{
				AddFilesFromFolderToDeleteListRecursive(d);
			}

			foreach (var f in Directory.GetFiles(basedir, _searchPattern))
			{
                
				try
				{
					var filestream = File.OpenRead(f);
					if (filestream.Length >= 3)
					{
						var buffer = new byte[3];
						filestream.Read(buffer, 0, buffer.Length);

						if (buffer[0] == 0xEF && buffer[1] == 0xBB && buffer[2] == 0xBF)
						{
							AddToDeleteList(f);		
						}

						filestream.Close();
					}
				}
				catch (Exception ex)
				{
					Console.WriteLine("Could not check file '{0}': {1}", f, ex.ToString());
				}
			}
		}

		private static void AddToDeleteList(string f)
		{
			Console.WriteLine(" Added '{0}' to processing list.", f);
			_checkList.Add(f);
		}
	}
}
