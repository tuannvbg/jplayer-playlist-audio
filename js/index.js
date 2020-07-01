function loadVip() {
	$.ajax("playlist.xml")
	.success(function(roster) {

        var songsArr = [];
		$(roster).find("track").each(function(idx, track) {
			track = $(track);
			songsArr.push({
				title: track.find("creator").text() + ' - ' + track.find("title").text(),
				artist: "",
				mp3: track.find("location").text(),
			});
		});

		var PL = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_1",
			cssSelectorAncestor: "#jp_container_1"
		}, 
		songsArr,
		{
			swfPath: "js",
			supplied: "mp3",
			wmode: "window",
			smoothPlayBar: true,
			keyEnabled: true,
			playlistOptions: {
				autoPlay: true,
				loopOnPrevious: false,
				shuffleOnLoop: true,
				enableRemoveControls: false,
				displayTime: 'slow',
				addTime: 'fast',
				removeTime: 'fast',
				shuffleTime: 'fast'
			},
		});

        PL.options.playlistOptions.autoPlay = true;
        $(PL.cssSelector.jPlayer).bind($.jPlayer.event.ready, function() {
			PL.shuffle(true,true);
		});
	});
}
