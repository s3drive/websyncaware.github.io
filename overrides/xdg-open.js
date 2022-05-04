window.overrides["xdg-open"] = function(mime){
    if(mime === "application/word" || mime === "application/msword" ||
        mime === "application/vnd.oasis.opendocument.text" || mime === "application/vnd.oasis.opendocument.spreadsheet" ||
        mime === "application/excel" || mime === "application/vnd.ms-excel" || mime === "application/powerpoint" ||
        mime === "application/vnd.ms-powerpoint" || mime === "application/vnd.oasis.opendocument.presentation" ) {
        return ["appframe", {"endpoint": "/api/onlyoffice/iframe"}];
    }
    return null;}
