function getDate(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    return year + '-' + month + '-' + day;
};

function getDateFormated(dateObject) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    return monthNames[month] + " " + day + ", " + year;
};

function insertSimilarUrls(url, json, templateSelector, positionSelector, max) {
    $.getJSON(json, function (data) {
        var urls = $.map(data, function (post) {
            return post.url;
        });

        var set = FuzzySet(urls);
        matching_urls = set.get(url);
        var template = $(templateSelector).html();

        for (var i = 0; i < matching_urls.length; i++)
        {
            if(i > max)return;

            var entryUrl = matching_urls[i][1];
            var post = $.map(data, function (post) {
                if (post.url === entryUrl) return post;
            })[0];

            var item = $(template).clone();
            var itemTitle = $(item).find('.title a');
            var itemDate = $(item).find('.date');
            var date = new Date(post.date);

            itemTitle.prop("href", post.url)
            itemTitle.prop("title", post.title);
            itemTitle.html(post.title);

            itemDate.prop("datetime", getDate(date));
            itemDate.html(getDateFormated(date));

            $(positionSelector).append(item);

        };
    });
}