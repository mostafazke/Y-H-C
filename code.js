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
    if (servers.length >= 2) {
      if (isdroppin) {
        let i = 0;
        while (true) {
          switch ([0, 1, 2, 3, 4, 5, 6, 7][i++]) {
            case '0':
              if (servers[2] !== undefined)
                var s2 =
                  rosaline(1107, 793) +
                  rosaline(1183, 589) +
                  rosaline(902, 630) +
                  rosaline(614, 609) +
                  rosaline(545, 242) +
                  rosaline(738, 345) +
                  rosaline(569, 652) +
                  servers[2] +
                  "'>" +
                  srvn2 +
                  (rosaline(1146, 869) + rosaline(1034, 473));
              else var s2 = '';
              continue;
            case '1':
              if (servers[1] !== undefined)
                var s1 =
                  rosaline(1107, 797) +
                  rosaline(1183, 1283) +
                  rosaline(902, 534) +
                  rosaline(614, 431) +
                  rosaline(545, 1155) +
                  rosaline(738, -114) +
                  rosaline(569, 1560) +
                  servers[1] +
                  "'>" +
                  srvn1 +
                  (rosaline(1146, 857) + rosaline(1034, 577));
              else var s1 = '';
              continue;
            case '2':
              if (servers[3] !== undefined)
                var s3 =
                  rosaline(1107, 1961) +
                  rosaline(1183, 1244) +
                  rosaline(902, 156) +
                  rosaline(614, 653) +
                  rosaline(545, 1213) +
                  rosaline(738, 7) +
                  rosaline(569, 143) +
                  servers[3] +
                  "'>" +
                  srvn3 +
                  (rosaline(1146, 1990) + rosaline(1034, 763));
              else var s3 = '';
              continue;
            case '3':
              if (servers[4] !== undefined)
                var s4 =
                  rosaline(1107, 970) +
                  rosaline(1183, 761) +
                  rosaline(902, 420) +
                  rosaline(614, 1993) +
                  rosaline(545, 1460) +
                  rosaline(738, 813) +
                  rosaline(569, 1448) +
                  servers[4] +
                  "'>" +
                  srvn4 +
                  (rosaline(1146, 794) + rosaline(1034, 790));
              else var s4 = '';
              continue;
            case '4':
              if (servers[5] !== undefined)
                var s5 =
                  rosaline(1107, 544) +
                  rosaline(1183, 1844) +
                  rosaline(902, 1613) +
                  rosaline(614, 1733) +
                  rosaline(545, -80) +
                  rosaline(738, 466) +
                  rosaline(569, 500) +
                  servers[5] +
                  "'>" +
                  srvn5 +
                  (rosaline(1146, 1993) + rosaline(1034, 1436));
              else var s5 = '';
              continue;
            case '5':
              if (servers[6] !== undefined)
                var s6 =
                  rosaline(1107, 419) +
                  rosaline(1183, 959) +
                  rosaline(902, 2174) +
                  rosaline(614, 1403) +
                  rosaline(545, 309) +
                  rosaline(738, 774) +
                  rosaline(569, 9) +
                  servers[6] +
                  "'>" +
                  srvn6 +
                  (rosaline(1146, 778) + rosaline(1034, 922));
              else var s6 = '';
              continue;
            case '6':
              $(rosaline(962, 2094) + 'lt')[rosaline(617, 230) + 'd'](
                rosaline(1066, 1952) +
                  rosaline(447, -320) +
                  rosaline(893, 308) +
                  rosaline(614, 618) +
                  rosaline(462, 1266) +
                  rosaline(696, 58) +
                  rosaline(1172, 1179) +
                  rosaline(768, 158) +
                  rosaline(683, 201) +
                  s0 +
                  s1 +
                  s2 +
                  s3 +
                  s4 +
                  s5 +
                  s6 +
                  (rosaline(876, 883) + rosaline(468, 1345))
              );
              continue;
            case '7':
              if (servers[0] !== undefined)
                var s0 =
                  rosaline(1107, 1254) +
                  rosaline(1183, 1758) +
                  rosaline(902, 1856) +
                  rosaline(614, 153) +
                  rosaline(545, 1163) +
                  rosaline(738, 226) +
                  rosaline(569, 81) +
                  servers[0] +
                  "'>" +
                  srvnd +
                  (rosaline(1146, 853) + rosaline(1034, 1932));
              else var s0 = '';
              continue;
          }
          break;
        }
      } else {
        var serverTypes = ['7', '3', '1', '6', '4', '5', '0', '2'],
          i = 0;
        while (true) {
          switch (serverTypes[i++]) {
            case '0':
              if (servers[6] !== undefined)
                var s6 = `<a class='button' data-link='undefined'>${srvn6}</a>`;
              else var s6 = '';
              continue;
            case '1':
              if (servers[2] !== undefined)
                var s2 = `<a class='button' data-link='undefined'>${srvn2}</a>`;
              else var s2 = '';
              continue;
            case '2':
              $('#result').append(
                `<a class='button' onclick='window.location.reload();'>تحديث</a>
                ${s0}${s1}${s2}${s3}${s4}${s5}${s6}
                `
              );
              continue;
            case '3':
              if (servers[1] !== undefined)
                var s1 = `<a class='button' data-link='${servers[1]}'>${srvn1}</a>`;
              else var s1 = '';
              continue;
            case '4':
              if (servers[4] !== undefined)
                var s4 = `<a class='button' data-link='${servers[4]}'>${srvn4}</a>`;
              else var s4 = '';
              continue;
            case '5':
              if (servers[5] !== undefined)
                var s5 = `<a class='button' data-link='${servers[5]}'>${srvn5}</a>`;
              else var s5 = '';
              continue;
            case '6':
              if (servers[3] !== undefined)
                var s3 = `<a class='button' data-link='${servers[3]}'>${srvn3}</a>`;
              else var s3 = '';
              continue;
            case '7':
              if (servers[0] !== undefined)
                var s0 = `<a class='button' data-link='${servers[0]}'>${srvnd}</a>`;
              else var s0 = '';
              continue;
          }
          break;
        }
      }
    }
    $('#iframe').attr(src, servers[0]);
    if (isdroppin) {
      $('select#comboA').change(function () {
        const dataLink = $(this).children('option:selected').attr('data-link');
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
