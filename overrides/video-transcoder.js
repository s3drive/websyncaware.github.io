window.overrides["video-map-sources"] = function (sources) {
    return sources.map(function (source) {
        if (source.type == "application/octet-stream") {
            return source;
        }
        source.src = source.src;
        source.type = "video/mp4";
        return source;
    })
}
