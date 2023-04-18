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
    var source = videosorc,
      playerInstance = jwplayer(rosaline(909, 1572) + 'r');
    jwplayer()[rosaline(721, 2094) + 'y'](function () {
      var labresha = {
        tbSVM: rosaline(685, 670),
        WSaAJ: function (dekotah, elfida) {
          return dekotah !== elfida;
        },
        KAAij: rosaline(963, 1472),
        DiXxq: function (lethaniel, clinesha) {
          return lethaniel + clinesha;
        },
        wqFPx: function (zalynn, devanna) {
          return zalynn + devanna;
        },
        wRrQy:
          rosaline(706, 723) +
          rosaline(1073, 1613) +
          rosaline(540, 1102) +
          rosaline(822, 1122) +
          rosaline(942, -150) +
          rosaline(595, 598) +
          rosaline(418, 1179) +
          rosaline(930, 1075) +
          rosaline(1082, 1669) +
          rosaline(816, 1083) +
          rosaline(1089, 1096) +
          rosaline(480, -208) +
          rosaline(814, 1091) +
          rosaline(1142, 1882),
        uKIKc:
          rosaline(485, 514) +
          rosaline(491, 420) +
          rosaline(445, 799) +
          rosaline(1099, 1211) +
          rosaline(492, -293) +
          rosaline(404, -188) +
          rosaline(753, 791) +
          rosaline(968, -118) +
          rosaline(495, 24) +
          rosaline(1156, 1193) +
          rosaline(497, 589) +
          rosaline(870, 319) +
          rosaline(1171, 976) +
          rosaline(1169, 924),
        yvafX: function (mykiah, phinehas) {
          return mykiah(phinehas);
        },
        jwMJR: rosaline(926, 49) + rosaline(1059, 146) + rosaline(868, 1038),
        GeFRI: function (merrit, breeana, lindzy) {
          return merrit(breeana, lindzy);
        },
      };
      labresha[rosaline(411, 61)](
        setTimeout,
        function () {
          var maira = { KEuGx: labresha[rosaline(664, 712)] };
          if (
            labresha[rosaline(632, 999)](
              labresha[rosaline(765, 1858)],
              labresha[rosaline(765, 727)]
            )
          )
            var laurelle = {
              hls: _0x377b21[rosaline(1163, 290) + 'ce'](
                maira[rosaline(808, 1768)],
                '&'
              ),
            };
          else {
            var nosheen = labresha[rosaline(416, -497)](
              labresha[rosaline(750, 1115)](
                labresha[rosaline(949, 1004)],
                logox
              ),
              labresha[rosaline(488, 263)]
            );
            labresha[rosaline(1192, 664)]($, labresha[rosaline(530, -315)])[
              rosaline(769, 1559)
            ](nosheen);
          }
        },
        200
      );
      labresha[rosaline(411, 723)](setTimeout, myFunction, 11);
    }),
      playerInstance[rosaline(1045, 1842)]({
        file: source,
        image: posterx,
        height: rosaline(724, 737),
        width: rosaline(724, 1839),
        autostart: xautoplay,
        advertising: {
          client: rosaline(1131, 2072),
          schedule: { adbreak1: { offset: rosaline(1006, 746), tag: tagUrlx } },
        },
      });
  }
  if (playerx == 'player5') {
    setTimeout(myFunction, 11);
    const video = document[
      rosaline(916, 1546) + rosaline(622, 1789) + rosaline(644, 397)
    ](rosaline(466, -262) + rosaline(674, 1552) + rosaline(1160, 884));
    document[
      rosaline(839, 1512) + rosaline(1058, 1694) + rosaline(838, 433) + 'r'
    ](
      rosaline(662, 1663) + rosaline(871, 431) + rosaline(1023, 796) + 'd',
      function () {
        var lasonya = {
          JGUJJ: function (nand, morrey) {
            return nand + morrey;
          },
          NjoTJ:
            rosaline(849, 137) +
            rosaline(902, 971) +
            rosaline(614, 1008) +
            rosaline(545, -150) +
            rosaline(738, 392) +
            rosaline(569, -312),
          tNXwD: rosaline(976, 1319),
          ymKId: function (haval, nehemia) {
            return haval !== nehemia;
          },
          lPQSe: rosaline(590, -665),
          yWOJB: rosaline(692, 1288),
          GcAPU: function (josejulian, aranzazu) {
            return josejulian === aranzazu;
          },
          WiLlX: rosaline(740, 632),
          kHtsh: rosaline(842, 834),
          VVBQS: rosaline(466, 345),
          QzdsC: rosaline(687, 912),
          hcybw: function (tanyia, shanaz) {
            return tanyia !== shanaz;
          },
          vtWHE: rosaline(596, 461),
          yIWch: rosaline(1028, 1624),
          cXmNK: function (tyyanna, tabitha, noctis) {
            return tyyanna(tabitha, noctis);
          },
          KrEBZ:
            rosaline(405, 1234) +
            rosaline(1022, 1312) +
            rosaline(1166, 900) +
            'ed',
        };
        const shammond = window[rosaline(897, 282)](srcx);
        const deeqa =
          dashjs[rosaline(540, -549) + rosaline(1118, 1561) + 'r']()[
            rosaline(872, 448) + 'e'
          ]();
        var elke = { autoplay: xautoplay };
        deeqa[rosaline(573, 15) + rosaline(1100, 1390)](video, shammond, false),
          deeqa[
            rosaline(1165, 1553) + rosaline(833, 1116) + rosaline(828, 881)
          ]({
            streaming: {
              abr: { autoSwitchBitrate: { audio: false, video: false } },
              fastSwitchEnabled: true,
              lowLatencyEnabled: true,
            },
          });
        deeqa.on(lasonya[rosaline(958, 727)], function () {
          var nabile = {
            MrvIA: function (etham, sathwik) {
              return lasonya[rosaline(438, 1189)](etham, sathwik);
            },
            tNaLD: lasonya[rosaline(988, 2021)],
            iZZEa: lasonya[rosaline(744, 1485)],
            cDJbx: function (sheary, dragan) {
              return lasonya[rosaline(774, 547)](sheary, dragan);
            },
            nvIlG: lasonya[rosaline(1031, 1993)],
            UAJFR: lasonya[rosaline(1132, 427)],
            ZaXJx: function (ceron, khaleesie) {
              return lasonya[rosaline(605, 992)](ceron, khaleesie);
            },
            UjUuv: lasonya[rosaline(477, 321)],
            weUnX: lasonya[rosaline(910, 576)],
            JEDXn: lasonya[rosaline(1190, 2161)],
            rxDIZ: lasonya[rosaline(1104, 1789)],
          };
          if (
            lasonya[rosaline(804, 1675)](
              lasonya[rosaline(625, 857)],
              lasonya[rosaline(618, 758)]
            )
          ) {
            const carminia = deeqa[
              rosaline(716, 269) +
                rosaline(673, 976) +
                rosaline(1175, 1854) +
                rosaline(1017, 981) +
                'r'
            ](lasonya[rosaline(1190, 1107)])[rosaline(658, 305)](
              (wanderlei) => wanderlei[rosaline(511, 1211) + 't']
            );
            elke[rosaline(456, 1139) + 'ty'] = {
              default: carminia[0][rosaline(511, 1411) + 't'],
              options: carminia,
              forced: true,
              onChange: function (sanskar) {
                var damori = {
                  owCSd: function (lannette, atrayu) {
                    return nabile[rosaline(439, 1244)](lannette, atrayu);
                  },
                  KljoZ: nabile[rosaline(903, 1394)],
                  qCmZp: nabile[rosaline(588, -295)],
                  TCobB: function (velisha, janael) {
                    return nabile[rosaline(499, -360)](velisha, janael);
                  },
                  ffyLs: nabile[rosaline(852, 1477)],
                  UXAOL: nabile[rosaline(806, 1534)],
                  xmstN: nabile[rosaline(1075, 1020)],
                };
                if (
                  nabile[rosaline(499, 828)](
                    nabile[rosaline(807, 1325)],
                    nabile[rosaline(807, 1554)]
                  )
                )
                  deeqa[
                    rosaline(716, 1724) +
                      rosaline(673, 1355) +
                      rosaline(1175, 1511) +
                      rosaline(1017, 848) +
                      'r'
                  ](nabile[rosaline(1075, 1312)])[rosaline(718, 1866) + 'ch'](
                    (jazelle, bayah) => {
                      if (
                        damori[rosaline(1044, -115)](
                          damori[rosaline(1180, 1498)],
                          damori[rosaline(1188, 91)]
                        )
                      ) {
                        if (
                          damori[rosaline(970, 1431)](
                            jazelle[rosaline(511, 1589) + 't'],
                            sanskar
                          )
                        ) {
                          if (
                            damori[rosaline(1044, 348)](
                              damori[rosaline(1120, 2187)],
                              damori[rosaline(1043, 1648)]
                            )
                          )
                            deeqa[
                              rosaline(915, 1409) +
                                rosaline(887, -148) +
                                rosaline(1139, 1971)
                            ](
                              damori[rosaline(959, -168)],
                              jazelle[
                                rosaline(456, -584) + rosaline(1013, 188) + 'ex'
                              ]
                            );
                          else return false;
                        }
                      } else return;
                    }
                  );
                else
                  var emmanuelle = nabile[rosaline(578, 970)](
                    nabile[rosaline(578, -310)](
                      nabile[rosaline(578, 1188)](
                        nabile[rosaline(578, 1366)](
                          nabile[rosaline(1127, 856)],
                          _0x258264[2]
                        ),
                        "'>"
                      ),
                      _0x14e0ee
                    ),
                    nabile[rosaline(1074, 2073)]
                  );
              },
            };
            const tanveer = new Plyr(video, elke);
            (window[rosaline(909, 2004) + 'r'] = tanveer),
              (window[rosaline(851, 1016)] = deeqa),
              lasonya[rosaline(487, 308)](setTimeout, myFunction, 11);
          } else var johnmatthew = '';
        });
        deeqa[rosaline(454, 597) + rosaline(972, 1150)](video);
      }
    );
  }
  if (playerx == 'player6') {
    var iTlfwI = (rosaline(668, 31) +
        rosaline(1189, 1815) +
        rosaline(399, 1581))[rosaline(734, 413)]('|'),
      gMeHMD = 0;
    while (true) {
      switch (iTlfwI[gMeHMD++]) {
        case '0':
          setTimeout(myFunction, 11);
          continue;
        case '1':
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
            logoPosition: rosaline(412, 953) + 'm',
            logoWatermark: rosaline(883, 1776),
            isLive: true,
            hlsJSMaxBufferLength: 12,
            hlsJSLiveSyncDuration: 3,
            sharing: true,
            sharingUrl: document[rosaline(432, 1507) + rosaline(434, -183)],
            sharingNetworks: [
              rosaline(908, 1661) + rosaline(688, 533),
              rosaline(442, -416) + 'er',
              rosaline(517, 357) + rosaline(957, 1881),
            ],
            sharingCode:
              rosaline(532, -335) +
              rosaline(1015, 1837) +
              rosaline(917, 1507) +
              rosaline(821, 454) +
              rosaline(841, 195) +
              rosaline(413, 234) +
              rosaline(1177, 1027) +
              rosaline(624, 455) +
              '"' +
              window[rosaline(483, 1224) + rosaline(415, 414)][
                rosaline(562, 37)
              ] +
              (rosaline(485, 1067) +
                rosaline(402, 1755) +
                rosaline(682, 1382) +
                rosaline(592, 1301) +
                rosaline(907, 206) +
                rosaline(986, 453) +
                rosaline(657, 556) +
                rosaline(504, -2) +
                rosaline(1018, 335) +
                rosaline(863, 2180) +
                rosaline(529, 280) +
                rosaline(1027, 944) +
                rosaline(921, 1007) +
                rosaline(1138, 616) +
                rosaline(966, 795) +
                rosaline(992, 1616) +
                rosaline(695, 1831) +
                rosaline(663, -19) +
                rosaline(583, 296) +
                rosaline(670, 577) +
                rosaline(1155, 440) +
                rosaline(1042, 1789) +
                rosaline(444, 1230) +
                rosaline(1011, 547) +
                rosaline(996, 2080) +
                rosaline(754, 192) +
                rosaline(473, 67)),
            gaTrackingId:
              rosaline(1164, 1086) + rosaline(677, 1895) + rosaline(1049, 1845),
            gaCategory:
              rosaline(478, 523) +
              rosaline(457, 1075) +
              rosaline(1096, 2275) +
              'o',
            gaLabel:
              rosaline(463, 1601) +
              rosaline(577, 1248) +
              rosaline(747, 1346) +
              rosaline(820, 1765) +
              rosaline(980, 1571) +
              rosaline(725, 74),
            gaEvents: [
              rosaline(699, 277) + 'xt',
              rosaline(785, 756),
              rosaline(909, 820) + rosaline(1064, 673) + 't',
              rosaline(1093, 912),
              rosaline(859, 2049) + rosaline(575, 1221) + 'on',
              rosaline(1116, 1049) + rosaline(424, 892) + rosaline(943, 1918),
              rosaline(1047, 864) + 'or',
            ],
          };
          continue;
        case '2':
          var rmp = new RadiantMP(elementID);
          continue;
        case '3':
          var elementID = rosaline(1126, 2219) + rosaline(938, 2059);
          continue;
        case '4':
          console.log(dashorhls);
          continue;
        case '5':
          if (dashorhls == rosaline(752, 1576))
            var src = {
              hls: videosorc[rosaline(1163, 551) + 'ce'](
                rosaline(685, 1915),
                '&'
              ),
            };
          else
            var src = {
              dash: videosorc[rosaline(1163, 1006) + 'ce'](
                rosaline(685, 1140),
                '&'
              ),
            };
          continue;
        case '6':
          rmp[rosaline(1001, 1829)](settings);
          continue;
      }
      break;
    }
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
