function myFunction() {
  console.log(
    '>>>>> Theme name   %cMATCH LIFE404',
    'color: white; background-color: red; padding: 2px 5px; border-radius: 2px'
  );
  console.log(
    '>>>>> Version      %c4 2023',
    'color: white; background-color: orange; padding: 2px 5px; border-radius: 2px'
  ),
    console.log(
      '>>>>> Devloped by  %cAhmed_web',
      'color: white; background-color: blueviolet; padding: 2px 5px; border-radius: 2px'
    );
}
if (isonplayer) {
  console.log(
    '>>>>> Theme name   %cMATCH LIFE404',
    'color: white; background-color: red; padding: 2px 5px; border-radius: 2px'
  );
  console.log(
    '>>>>> Version      %c4 2023',
    'color: white; background-color: orange; padding: 2px 5px; border-radius: 2px'
  );
  console.log(
    '>>>>> Devloped by  %cAhmed_web',
    'color: white; background-color: blueviolet; padding: 2px 5px; border-radius: 2px'
  );
  if (playerx == 'player1') {
    setTimeout(myFunction, 11);
    const video = document.querySelector('video'),
      source = videosorc,
      defaultOptions = {};
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(source);
      hls.on(Hls.Events['MANIFEST_PARSED'], function () {
        const heights = hls.levels.map((l) => l.height);
        defaultOptions.quality = {
          default: heights[0],
          options: heights,
          forced: true,
          onChange: (q) => updateQuality(q),
        };
        const plyr = new Plyr(video, defaultOptions);

        plyr.once('playing', () => {
          setTimeout(() => {
            var madona = `<img alt="Media player logo" class="rmp-logo rmp-logo-top-left" src="${logox}" style=" left: 10px; top: 10px; position: absolute; z-index: 999; " />`;
            $('.plyr__controls').after(madona);
          }, 3e3);
        });
      });
      hls.attachMedia(video);
      window.hls = hls;
    } else {
      const plyr = new Plyr(video, defaultOptions);
    }
    function updateQuality(quality) {
      window.hls.currentLevel = [].indexOf(quality);
    }
    setTimeout(function () {
      const logo = `<img alt="Media player logo" class="rmp-logo rmp-logo-top-left" src="${logox}" style=" left: 10px; top: 10px; position: absolute; z-index: 999; ">`;
      $('.plyr__controls').after(logo);
    }, 200);
    console.log('all done');
  }
  if (playerx == 'player2') {
    setTimeout(myFunction, 11);
    const player = new Clappr.Player({
      parentId: '#player',
      source: videosorc,
      poster: posterx,
      events: {
        onPlay: function () {
          setTimeout(function () {
            $('.media-control').after(
              `<img alt="Media player logo" class="rmp-logo rmp-logo-top-left" src="${logox}" style=" left: 10px; top: 10px; position: absolute; z-index: 999; ">`
            );
          }, 200);
        },
      },
      disableKeyboardShortcuts: true,
      disableVideoTagContextMenu: true,
      autoSeekFromUrl: false,
      height: 360,
      width: 640,
      autoPlay: xautoplay,
      playback: {
        playInline: true,
        recycleVideo: Clappr.Browser.isMobile,
      },
      plugins: [ClapprImaPlugin, LevelSelector],
      levelSelectorConfig: {
        title: 'Quality',
        labels: { 0: 'Low', 1: 'Med', 2: 'High' },
        labelCallback: function (playbackLevel, customLabel) {
          return playbackLevel.level.height + 'p';
        },
      },
      imaPlugin: {
        requestAdIfNoAutoplay: true,
        disableNonLinearForIOS: true,
        resetAdOnEnded: true,
        imaAdPlayer: {
          tag: tagUrlx,
          vpaidMode: 2,
          locale: 'ar',
          maxDuration: 3e4,
          adsRenderingOptions: {
            useStyledLinearAds: true,
            useStyledNonLinearAds: true,
          },
        },
      },
    });
    console.log('all done');
  }
  if (playerx == 'player3') {
    setTimeout(myFunction, 11);
    const source = videosorc;
    const playerInstance = jwplayer('player');
    jwplayer().onPlay(function () {
      setTimeout(function () {
        $('.jw-controlbar').after(
          `<img alt="Media player logo" class="rmp-logo rmp-logo-top-left" src="${logox}" style=" left: 10px; top: 10px; position: absolute; z-index: 999; ">`
        );
      }, 200);
    });
    playerInstance.setup({
      file: source,
      image: posterx,
      width: '100%',
      height: 320,
      autostart: xautoplay,
      advertising: {
        client: 'vast',
        schedule: { adbreak1: { offset: 'pre', tag: tagUrlx } },
      },
    });
    console.log('all done');
  }
  if (playerx == 'player5') {
    setTimeout(myFunction, 11);
    const video = document.getElementById('videoContainer');
    document.addEventListener('DOMContentLoaded', function () {
      const shammond = videosorc;
      const player = dashjs.MediaPlayer().create();

      var options = { autoplay: xautoplay };
      player.initialize(video, shammond, false),
        player.updateSettings({
          streaming: {
            abr: { autoSwitchBitrate: { audio: false, video: false } },
            fastSwitchEnabled: true,
            lowLatencyEnabled: true,
          },
        });

      player.on('streamInitialized', function () {
        const heights = player
          .getBitrateInfoListFor('video')
          .map((stream) => stream.height);

        options.quality = {
          default: heights[0],
          options: heights,
          forced: true,
          onChange: function (height) {
            player.getBitrateInfoListFor('video').forEach((streams) => {
              if (streams.height == height) {
                player.setQualityFor('video', streams.qualityIndex);
              }
            });
          },
        };
        const plyr = new Plyr(video, options);
        window.player = plyr;
        window.dash = player;
      });
      player.attachView(video);
    });
  }
  if (playerx == 'player6') {
    setTimeout(myFunction, 11);

    const src = {
      [dashorhls]: videosorc.replace('&amp;', '&'),
    };

    var settings = {
      licenseKey: radiatoken,
      iframeMode: true,
      iframeAllowed: true,
      sharing: true,
      skin: 's2',
      src: src,
      pip: true,
      contentMetadata: { poster: [posterx] },
      ads: enabledadsx,
      adTagUrl: tagUrlx,
      autoplay: xautoplay,
      logo: logox,
      logoLoc: '',
      logoPosition: 'bottom',
      logoWatermark: false,
      isLive: true,
      hlsJSMaxBufferLength: 12,
      hlsJSLiveSyncDuration: 3,
      sharing: true,
      sharingUrl: document.referrer,
      sharingNetworks: ['facebook', 'twitter', 'linkedin'],
      sharingCode: `<iframe width="100%" height="500px" src="${window.location.href}" style="border:none;" allowfullscreen allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; encrypted-media"></iframe>`,
      gaTrackingId: 'UA-106571682-1',
      gaCategory: 'E-learning video',
      gaLabel: 'How to start with HTML5 video',
      gaEvents: [
        'context ready',
        'playerstart',
        'error',
        'adimpression',
        'adloadererror',
        'aderror',
      ],
    };

    var rmp = new RadiantMP('rmpPlayer');
    rmp.init(settings);
  }
  if (playerx == 'multiple') {
    setTimeout(myFunction, 11);
    // check if there are at least two servers
    if (servers.length >= 2) {
      // check if dropdown is needed
      if (isdroppin) {
        const serverOptions = servers.reduce((options, server, i) => {
          if (server !== undefined) {
            options.push(
              `<option class='button' data-link='${server}'>${
                window[`srvn${i}`]
              }</option>`
            );
          }
          return options;
        }, []);

        $('#result').append(
          `<select class='button active' id='comboA'>${serverOptions.join(
            ''
          )}</select>`
        );
      } else {
        const serverButtons = servers.reduce((buttons, server, i) => {
          if (server !== undefined) {
            buttons.push(
              `<a class='button' data-link='${server}'>${
                window[`srvn${i}`]
              }</a>`
            );
          }
          return buttons;
        }, []);

        $('#result').append(
          `<a class='button' onclick='window.location.reload();'>تحديث</a>${serverButtons.join(
            ''
          )}`
        );
      }
    }

    // set the first server as the default option
    $('#iframe').attr('src', servers[0]);

    // handle tab change events
    if (isdroppin) {
      $('select#comboA').change(function () {
        const selectedOption = $(this).children('option:selected');
        const dataLink = selectedOption.attr('data-link');
        $('#iframe').attr('src', dataLink);
        setTimeout(myFunction, 11);
      });
    } else {
      $('#result .button').on('click', function () {
        console.log('tab change');
        const dataLink = $(this).attr('data-link');
        $('#iframe').attr('src', dataLink);
      });
    }
  }
}
