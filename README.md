# javaScript-{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "echo",
            "type": "shell",
            "command": "chrome.exe",
            "windows":{
                "command":"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
            },
            "args":[
                "${file}"
            ],
            "problemMatcher":[],
            "group":{
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
