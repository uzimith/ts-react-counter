interface KeyMirrorStatic {
  (obj: any): any;
}

declare module 'keymirror' {
  var keyMirror: KeyMirrorStatic;
  export default keyMirror;
}

