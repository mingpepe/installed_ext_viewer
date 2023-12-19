document.addEventListener('DOMContentLoaded', function () {
    chrome.management.getAll(function (extensions) {
        var extensionList = document.getElementById('extensionList');

        extensions.forEach(function (extension) {
            var listItem = document.createElement('li');
            var details = document.createElement('details');
            var summary = document.createElement('summary');
            var pre = document.createElement('pre');

            // Set extension name as summary content
            summary.textContent = extension.name;

            // Set extension details content
            pre.textContent = JSON.stringify(extension, null, 2);

            // Append elements to the document
            details.appendChild(summary);
            details.appendChild(pre);
            listItem.appendChild(details);

            extensionList.appendChild(listItem);
        });
    });
});
