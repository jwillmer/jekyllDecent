# UTF Byte Order Mark (BOM) Remover

With this little Microsoft Windows command line tool you can remove the Byte Order Mark (BOM) from any files within a given directory recursively (i.e. all java files in the directory src/).

Download: [bomremover.zip](https://www.mannaz.at/files/bomremover.zip) (sourcecode inside)

Usage:

  1. Unzip the file to arbitrary location
  2. Open a cmd-window at this location
  3. call bomremover.exe pathWhereToRemoveBom fileMatchingPattern
     i.e.: `bomremover.exe C:\work\java\myprogram\src *.java`
  4. follow the on-screen instructions (press return twice)
  5. success

Source:  [Maurice Wohlkönig](https://www.mannaz.at/codebase/utf-byte-order-mark-bom-remover)