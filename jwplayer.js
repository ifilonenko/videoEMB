   jwplayer("container").setup({
                flashplayer: "player.swf",
                autoplay: "false",
                height: 266,
                width: 400
    }).onReady(function() {
if (this.container.tagName.toLowerCase() == "object") {
   // Flash case
               this.load({
               provider: "rtmp",
                streamer: "rtmp://b-media.fccc.edu/gost/",
                file: "mp4:theguitrip.mp4",
                image: "imagename.png"
    });
               } else {
     // HTML5 case
                this.load({
                file: "http://b-media.fccc.edu:1935/vod/mp4:theguitrip.mp4/playlist.m3u8",
               image: "oucomesVidpreview.png"
                });
      }
 
    });