// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

// TODO(adamk/jkummerow/neis): Support BigInts in TF unary ops.
// Flags: --noopt

var data = [{
  a: "-609648ccf253976b12f6b6c8e20790c17ef6b89ea9f536267783607cf465b1ca",
  r: "-609648ccf253976b12f6b6c8e20790c17ef6b89ea9f536267783607cf465b1cb"
}, {
  a: "-6e4c39cdd2c666e32cf2fd3c53a20eeb725e7578af97d42",
  r: "-6e4c39cdd2c666e32cf2fd3c53a20eeb725e7578af97d43"
}, {
  a: "34c93e1c",
  r: "34c93e1b"
}, {
  a: "-db3032",
  r: "-db3033"
}, {
  a: "8e658ffacbefbdec5",
  r: "8e658ffacbefbdec4"
}, {
  a: "-d321033ec94d6a75f",
  r: "-d321033ec94d6a760"
}, {
  a: "-286017f718d6118b581ec4357e456ce6d12c01aed9a32ff0cc048d",
  r: "-286017f718d6118b581ec4357e456ce6d12c01aed9a32ff0cc048e"
}, {
  a: "c0",
  r: "bf"
}, {
  a: "9f9577e008a6f46f7709f71362176ebe23d19eb9e58a41de6f2631b18f2ca",
  r: "9f9577e008a6f46f7709f71362176ebe23d19eb9e58a41de6f2631b18f2c9"
}, {
  a: "-9d4294590df0aa8ea46a5c2a3d186a6afcc00c6ebb072752",
  r: "-9d4294590df0aa8ea46a5c2a3d186a6afcc00c6ebb072753"
}, {
  a: "-4bc2aed1641151db908c0eb21aa46d8b406803dc0f71d66671322d59babf10c2",
  r: "-4bc2aed1641151db908c0eb21aa46d8b406803dc0f71d66671322d59babf10c3"
}, {
  a: "-1dfb3929632fbba39f60cabdc27",
  r: "-1dfb3929632fbba39f60cabdc28"
}, {
  a: "c0d409943c093aec43ba99a33ef2bb54574ecdc7cccf6547ab44eafb27",
  r: "c0d409943c093aec43ba99a33ef2bb54574ecdc7cccf6547ab44eafb26"
}, {
  a: "3d148dcffe94f859c80b38c4",
  r: "3d148dcffe94f859c80b38c3"
}, {
  a: "0",
  r: "-1"
}, {
  a: "d659f6507e0ac2e653bdb7c3fb38c1514dd33619a9a0c87fcb69b22",
  r: "d659f6507e0ac2e653bdb7c3fb38c1514dd33619a9a0c87fcb69b21"
}, {
  a: "14efe",
  r: "14efd"
}, {
  a: "-f2df301948cd17ff391a6589a67551c00679687ba5",
  r: "-f2df301948cd17ff391a6589a67551c00679687ba6"
}, {
  a: "-e",
  r: "-f"
}, {
  a: "-a09cf77fea7af1767695c978af13fdb62f4f040b6fb803625fb124cc99139cddadd",
  r: "-a09cf77fea7af1767695c978af13fdb62f4f040b6fb803625fb124cc99139cddade"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var r = --a;
  if (d.r !== r.toString(16)) {
    print("Input:    " + a.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
