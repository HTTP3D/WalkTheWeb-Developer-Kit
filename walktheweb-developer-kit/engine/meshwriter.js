/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}, Wrapper;                                                                // +-+
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/  Wrapper = __webpack_require__(__webpack_require__.s = 0);                                          // +-+
/******/  if ( typeof module === 'object' && module.exports ) {                                              // +-+
/******/    module.exports = { MeshWriter : Wrapper }                                                        // +-+
/******/  }                                                                                                  // +-+
/******/  if ( typeof define === 'function' && define.amd ) {                                                // +-+
/******/    define ( 'meshwriter' , [], function() { return MeshWriter } )                                   // +-+
/******/  }                                                                                                  // +-+
/******/  return Wrapper;                                                                                    // +-+
/******/ 	// return __webpack_require__(__webpack_require__.s = 0);                                          // +-+
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Babylon MeshWriter
 * https://github.com/BabylonJS/Babylon.js
 * (c) 2018-2019 Brian Todd Button
 * Released under the MIT license
 */


// *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
// This function loads the specific type-faces and returns the superconstructor
// If BABYLON is loaded, it assigns the superconstructor to BABYLON.MeshWriter
// Otherwise it assigns it to global variable 'BABYLONTYPE'
// 
// Note to developers:  Helvetica Neue Medium is assumed, by the code, to be present
//                      Do NOT remove it during customization

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5),__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(HPB,HNM,CSN,JUR,WGD){
  // >>>>>  STEP 1 <<<<<

    var scene,FONTS,defaultColor,defaultOpac,naturalLetterHeight,curveSampleSize,??=Math.floor,hpb,hnm,csn,jur,wgd,debug;
    var b128back,b128digits;
    var earcut = __webpack_require__(7);
    prepArray();
    // >>>>>  STEP 2 <<<<<
    hpb                          = HPB(codeList);
    hnm                          = HNM(codeList);                         // Do not remove
    csn                          = CSN(codeList);
    jur                          = JUR(codeList);
    wgd                          = WGD(codeList);
    // >>>>>  STEP 2 <<<<<
    FONTS                        = {};
    // >>>>>  STEP 3 <<<<<
    FONTS["HirukoPro-Book"]      = hpb;
    FONTS["HelveticaNeue-Medium"]= hnm;                                   // Do not remove
    FONTS["Helvetica"]           = hnm;
    FONTS["Arial"]               = hnm;
    FONTS["sans-serif"]          = hnm;
    FONTS["Comic"]               = csn;
    FONTS["comic"]               = csn;
    FONTS["ComicSans"]           = csn;
    FONTS["Jura"]                = jur;
    FONTS["jura"]                = jur;
    FONTS["WebGL-Dings"]         = wgd;
    FONTS["Web-dings"]           = wgd;
    // >>>>>  STEP 3 <<<<<
    defaultColor                 = "#808080";
    defaultOpac                  = 1;
    curveSampleSize              = 6;
    naturalLetterHeight          = 1000;

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR 
    // Parameters:
    //   ~ scene
    //   ~ preferences

    var Wrapper                  = function(){

      var proto,defaultFont,scale,meshOrigin,preferences;

      scene                      = arguments[0];
      preferences                = makePreferences(arguments);

      defaultFont                = isObject(FONTS[preferences.defaultFont]) ? preferences.defaultFont : "HelveticaNeue-Medium";
      meshOrigin                 = preferences.meshOrigin==="fontOrigin" ? preferences.meshOrigin : "letterCenter";
      scale                      = isNumber(preferences.scale) ? preferences.scale : 1;
      debug                      = isBoolean(preferences.debug) ? preferences.debug : false;

      // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
      //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
      // Called with 'new'
      // Parameters:
      //   ~ letters
      //   ~ options

      function MeshWriter(lttrs,opt){

        var material,meshesAndBoxes,offsetX,meshes,lettersBoxes,lettersOrigins,combo,sps,mesh,xWidth;

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Here we set ALL parameters with incoming value or a default
        // setOption:  applies a test to potential incoming parameters
        //             if the test passes, the parameters are used, else the default is used
        var options              = isObject(opt) ? opt : { } ,
            position             = setOption ( options,  "position", isObject, {} ) ,
            colors               = setOption ( options,  "colors",   isObject, {} ) ,
            fontFamily           = setOption ( options,  "font-family", isSupportedFont, defaultFont ) ,
            anchor               = setOption ( options,  "anchor",   isSupportedAnchor, "left" ) ,
            rawheight            = setOption ( options,  "letter-height", isPositiveNumber, 100 ) ,
            rawThickness         = setOption ( options,  "letter-thickness", isPositiveNumber, 1 ) ,
            basicColor           = setOption ( options,  "color",    isString, defaultColor ) ,
            opac                 = setOption ( options,  "alpha",    isAmplitude, defaultOpac ) ,
            y                    = setOption ( position, "y",        isNumber, 0),
            x                    = setOption ( position, "x",        isNumber, 0),
            z                    = setOption ( position, "z",        isNumber, 0),
            diffuse              = setOption ( colors,   "diffuse",  isString, "#F0F0F0"),
            specular             = setOption ( colors,   "specular", isString, "#000000"),
            ambient              = setOption ( colors,   "ambient",  isString, "#F0F0F0"),
            emissive             = setOption ( colors,   "emissive", isString, basicColor),
            fontSpec             = FONTS[fontFamily],
            letterScale          = round(scale*rawheight/naturalLetterHeight),
            thickness            = round(scale*rawThickness),
            letters              = isString(lttrs) ? lttrs : "" ;

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Now all the parameters are set, let's get to business
        // First create the material
        material                 = makeMaterial(scene, letters, emissive, ambient, specular, diffuse, opac);

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Next, create the meshes
        // This creates an array of meshes, one for each letter
        // It also creates two other arrays, which are used for letter positioning
        meshesAndBoxes           = constructLetterPolygons(letters, fontSpec, 0, 0, 0, letterScale, thickness, material, meshOrigin);
        meshes                   = meshesAndBoxes[0];
        lettersBoxes             = meshesAndBoxes[1];
        lettersOrigins           = meshesAndBoxes[2];
        xWidth                   = meshesAndBoxes.xWidth;           

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // The meshes are converted into particles of an SPS
        combo                    = makeSPS(scene, meshesAndBoxes, material);
        sps                      = combo[0];
        mesh                     = combo[1];

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Set the final SPS-mesh position according to parameters
        offsetX                  = anchor==="right" ? (0-xWidth) : ( anchor==="center" ? (0-xWidth/2) : 0 );
        mesh.position.x          = scale*x+offsetX;
        mesh.position.y          = scale*y;
        mesh.position.z          = scale*z;

        this.getSPS              = ()  => sps;
        this.getMesh             = ()  => mesh;
        this.getMaterial         = ()  => material;
        this.getOffsetX          = ()  => offsetX;
        this.getLettersBoxes     = ()  => lettersBoxes;
        this.getLettersOrigins   = ()  => lettersOrigins;
        this.color               = c   => isString(c)?color=c:color;
        this.alpha               = o   => isAmplitude(o)?opac=o:opac;
        this.clearall            = function()  {sps=null;mesh=null;material=null};
      };
      //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
      // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

      proto                      = MeshWriter.prototype;

      proto.setColor             = function(color){
        var material             = this.getMaterial();
        if(isString(color)){
          material.emissiveColor = rgb2Bcolor3(this.color(color));
        }
      };
      proto.setAlpha             = function(alpha){
        var material             = this.getMaterial();
        if(isAmplitude(alpha)){
          material.alpha         = this.alpha(alpha)
        }
      };
      proto.overrideAlpha        = function(alpha){
        var material             = this.getMaterial();
        if(isAmplitude(alpha)){
          material.alpha         = alpha
        }
      };
      proto.resetAlpha           = function(){
        var material             = this.getMaterial();
        material.alpha           = this.alpha()
      };
      proto.getLetterCenter      = function(ix){
        return new BABYLON.Vector2(0,0)
      }
      proto.dispose              = function(){
        var mesh                 = this.getMesh(),
            sps                  = this.getSPS(),
            material             = this.getMaterial();
        if(sps){sps.dispose()}
        this.clearall()
      };
      MeshWriter.codeList        = codeList;
      MeshWriter.decodeList      = decodeList;

      return MeshWriter;

    };
    if ( typeof window !== "undefined" ) {
      window.TYPE                = Wrapper;
      window.MeshWriter          = Wrapper
    }
    if ( typeof global !== "undefined" ) {
      global.MeshWriter          = Wrapper
    }
    if ( typeof BABYLON === "object" ) {
      BABYLON.MeshWriter         = Wrapper;
      supplementCurveFunctions();
    };
    if (  true && module.exports ) {
      module.exports             = Wrapper;
    }
    return Wrapper;

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
    // MakeSPS turns the output of constructLetterPolygons into an SPS
    // with the whole string, with appropriate offsets
    function makeSPS(scene,meshesAndBoxes,material){
      var meshes                 = meshesAndBoxes[0],
          lettersOrigins         = meshesAndBoxes[2],sps,spsMesh;
      if(meshes.length){
        sps                      = new BABYLON.SolidParticleSystem("sps"+"test",scene, { } );
        meshes.forEach(function(mesh,ix){
          sps.addShape(mesh, 1, {positionFunction: makePositionParticle(lettersOrigins[ix])});
          mesh.dispose()
        });
        spsMesh                  = sps.buildMesh();
        spsMesh.material         = material;
        sps.setParticles()
      }
      return [sps,spsMesh];

      function makePositionParticle(letterOrigins){
        return function positionParticle(particle,ix,s){
          particle.position.x    = letterOrigins[0]+letterOrigins[1];
          particle.position.z    = letterOrigins[2]
        }
      }
    };

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
    // Takes specifications and returns an array with three elements, each of which
    // is an array (length of each array === the number of incoming characters)
    //   ~ the meshes (not offset by position)
    //   ~ the boxes (to help with positions features) 
    //   ~ the letter origins (providing offset for each letter)
    function constructLetterPolygons(letters, fontSpec, xOffset, yOffset, zOffset, letterScale, thickness, material, meshOrigin){
      var letterOffsetX          = 0,
          lettersOrigins         = new Array(letters.length),
          lettersBoxes           = new Array(letters.length),
          lettersMeshes          = new Array(letters.length),
          ix                     = 0, letter, letterSpec, lists, shapesList, holesList, letterMeshes, letterBox, letterOrigins, meshesAndBoxes, i;

      for(i=0;i<letters.length;i++){
        letter                   = letters[i];
        letterSpec               = makeLetterSpec(fontSpec,letter);
        if(isObject(letterSpec)){
          lists                  = buildLetterMeshes(letter, i, letterSpec, fontSpec.reverseShapes, fontSpec.reverseHoles);
          shapesList             = lists[0];
          holesList              = lists[1];
          letterBox              = lists[2];
          letterOrigins          = lists[3];

          // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
          // This subtracts the holes, if any, from the shapes and merges the shapes
          // (Many glyphs - 'i', '%' - have multiple shapes)
          // At the end, there is one mesh per glyph, as God intended
          letterMeshes           = punchHolesInShapes(shapesList,holesList);
          if(letterMeshes.length){
            lettersMeshes[ix]    = merge(letterMeshes);
            lettersOrigins[ix]   = letterOrigins;
            lettersBoxes[ix]     = letterBox;
            ix++
          }
        }
      };
      meshesAndBoxes             = [lettersMeshes,lettersBoxes,lettersOrigins];
      meshesAndBoxes.xWidth      = round(letterOffsetX);
      meshesAndBoxes.count       = ix;
      return meshesAndBoxes;

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // A letter may have one or more shapes and zero or more holes
      // The shapeCmds is an array of shapes
      // The holeCmds is an array of array of holes, the outer array lining up with
      // the shapes array and the inner array permitting more than one hole per shape
      // (Think of the letter 'B', with one shape and two holes, or the symbol
      // '%' which has three shapes and two holes)
      // 
      // For mystifying reasons, the holeCmds (provided by the font) must be reversed
      // from the original order and the shapeCmds must *not* be reversed
      // UNLESS the font is Jura, in which case the holeCmds are not reversed
      // (Possibly because the Jura source is .otf, and the others are .ttf)
      //
      // *WARNING*                                                         *WARNING*
      // buildLetterMeshes performs a lot of arithmetic for offsets to support
      // symbol reference points, BABYLON idiocyncracies, font idiocyncracies,
      // symbol size normalization, the way curves are specified and "relative"
      // coordinates.  (Fonts use fixed coordinates but many other SVG-style
      // symbols use relative coordinates)
      // *WARNING*                                                         *WARNING*
      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =

      function buildLetterMeshes(letter, index, spec, reverseShapes, reverseHoles){

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // A large number of offsets are created, per warning
        var balanced             = meshOrigin === "letterCenter",
            centerX              = (spec.xMin+spec.xMax)/2,
            centerZ              = (spec.yMin+spec.yMax)/2,
            xFactor              = isNumber(spec.xFactor)?spec.xFactor:1,
            zFactor              = isNumber(spec.yFactor)?spec.yFactor:1,
            xShift               = isNumber(spec.xShift)?spec.xShift:0,
            zShift               = isNumber(spec.yShift)?spec.yShift:0,
            reverseShape         = isBoolean(spec.reverseShape)?spec.reverseShape:reverseShapes,
            reverseHole          = isBoolean(spec.reverseHole)?spec.reverseHole:reverseHoles,
            offX                 = xOffset-(balanced?centerX:0),
            offZ                 = zOffset-(balanced?centerZ:0),
            shapeCmdsLists       = isArray(spec.shapeCmds) ? spec.shapeCmds : [],
            holeCmdsListsArray   = isArray(spec.holeCmds) ? spec.holeCmds : [] , letterBox, letterOrigins;

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Several scaling functions are created too, per warning
        var adjX                 = makeAdjust(letterScale,xFactor,offX,0,false,true),                     // no shift
            adjZ                 = makeAdjust(letterScale,zFactor,offZ,0,false,false),
            adjXfix              = makeAdjust(letterScale,xFactor,offX,xShift,false,true),                // shifted / fixed
            adjZfix              = makeAdjust(letterScale,zFactor,offZ,zShift,false,false),
            adjXrel              = makeAdjust(letterScale,xFactor,offX,xShift,true,true),                 // shifted / relative
            adjZrel              = makeAdjust(letterScale,zFactor,offZ,zShift,true,false),
            thisX, lastX, thisZ, lastZ, minX=NaN, maxX=NaN, minZ=NaN, maxZ=NaN, minXadj=NaN, maxXadj=NaN, minZadj=NaN, maxZadj=NaN;

        letterBox                = [ adjX(spec.xMin), adjX(spec.xMax), adjZ(spec.yMin), adjZ(spec.yMax) ];
        letterOrigins            = [ round(letterOffsetX), -1*adjX(0), -1*adjZ(0) ];

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Scope warning:  letterOffsetX belongs to an outer closure
        // and persists through multiple characters
        letterOffsetX            = letterOffsetX+spec.wdth*letterScale;

        if(debug&&spec.show){
          console.log([minX,maxX,minZ,maxZ]);
          console.log([minXadj,maxXadj,minZadj,maxZadj])
        }

        return [ shapeCmdsLists.map(makeCmdsToMesh(reverseShape)) , holeCmdsListsArray.map(meshesFromCmdsListArray) , letterBox , letterOrigins ] ;

        function meshesFromCmdsListArray(cmdsListArray){
          return cmdsListArray.map(makeCmdsToMesh(reverseHole))
        };
        function makeCmdsToMesh(reverse){
          return function cmdsToMesh(cmdsList){
            var cmd              = getCmd(cmdsList,0),
                path             = new BABYLON.Path2(adjXfix(cmd[0]), adjZfix(cmd[1])), array, meshBuilder, j, last, first = 0;

            // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
            // Array length is used to determine curve type in the 'TheLeftover Font Format'  (TLFF)
            // 
            // IDIOCYNCRACY:  Odd-length arrays indicate relative coordinates; the first digit is discarded
            
            for ( j=1 ; j<cmdsList.length ; j++ ) {
              cmd                = getCmd(cmdsList,j);

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Line
              if(cmd.length===2){
                path.addLineTo(adjXfix(cmd[0]),adjZfix(cmd[1])) 
              }
              if(cmd.length===3){
                path.addLineTo(adjXrel(cmd[1]),adjZrel(cmd[2]));
              }

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Quadratic curve
              if(cmd.length===4){
                path.addQuadraticCurveTo(adjXfix(cmd[0]),adjZfix(cmd[1]),adjXfix(cmd[2]),adjZfix(cmd[3]))
              }
              if(cmd.length===5){
                path.addQuadraticCurveTo(adjXrel(cmd[1]),adjZrel(cmd[2]),adjXrel(cmd[3]),adjZrel(cmd[4]));
              }

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Cubic curve
              if(cmd.length===6){
                path.addCubicCurveTo(adjXfix(cmd[0]),adjZfix(cmd[1]),adjXfix(cmd[2]),adjZfix(cmd[3]),adjXfix(cmd[4]),adjZfix(cmd[5]))
              }
              if(cmd.length===7){
                path.addCubicCurveTo(adjXrel(cmd[1]),adjZrel(cmd[2]),adjXrel(cmd[3]),adjZrel(cmd[4]),adjXrel(cmd[5]),adjZrel(cmd[6]))
              }
            }
            // Having created a Path2 instance with BABYLON utilities,
            // we turn it into an array and discard it
            array                = path.getPoints().map(point2Vector);

            // Sometimes redundant coordinates will cause artifacts - delete them!
            last                 = array.length - 1 ;
            if ( array[first].x===array[last].x && array[first].y===array[last].y ) { array = array.slice(1) }
            if ( reverse ) { array.reverse() }

            meshBuilder          = new BABYLON.PolygonMeshBuilder("MeshWriter-"+letter+index+"-"+weeid(), array, scene, earcut);
            return meshBuilder.build(true,thickness)
          }
        };
        function getCmd(list,ix){
          var cmd,len;
          lastX                  = thisX;
          lastZ                  = thisZ;
          cmd                    = list[ix];
          len                    = cmd.length;
          thisX                  = isRelativeLength(len) ? round((cmd[len-2]*xFactor)+thisX) : round(cmd[len-2]*xFactor);
          thisZ                  = isRelativeLength(len) ? round((cmd[len-1]*zFactor)+thisZ) : round(cmd[len-1]*zFactor);
          minX                   = thisX>minX?minX:thisX;
          maxX                   = thisX<maxX?maxX:thisX;
          minXadj                = thisX+xShift>minXadj?minXadj:thisX+xShift;
          maxXadj                = thisX+xShift<maxXadj?maxXadj:thisX+xShift;
          minZ                   = thisZ>minZ?minZ:thisZ;
          maxZ                   = thisZ<maxZ?maxZ:thisZ;
          minZadj                = thisZ+zShift>minZadj?minZadj:thisZ+zShift;
          maxZadj                = thisZ+zShift<maxZadj?maxZadj:thisZ+zShift;
          return cmd
        };

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Returns the a scaling function, based on incoming parameters
        function makeAdjust(letterScale,factor,off,shift,relative,xAxis){
          if(relative){
            if(xAxis){
              return val => round(letterScale*((val*factor)+shift+lastX+off))
            }else{
              return val => round(letterScale*((val*factor)+shift+lastZ+off))
            }
          }else{
            return val => round(letterScale*((val*factor)+shift+off))
          }
        }
      };

      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      function punchHolesInShapes(shapesList,holesList){
        var letterMeshes         = [],j;
        for ( j=0 ; j<shapesList.length ; j++ ) {
          let shape              = shapesList[j];
          let holes              = holesList[j];
          if(isArray(holes)&&holes.length){
            letterMeshes.push ( punchHolesInShape(shape,holes,letter,i) )
          }else{
            letterMeshes.push ( shape )
          }
        }
        return letterMeshes
      };
      function punchHolesInShape(shape,holes,letter,i){
        var csgShape             = BABYLON.CSG.FromMesh(shape),k;
        for ( k=0; k<holes.length ; k++ ) {
          csgShape               = csgShape.subtract(BABYLON.CSG.FromMesh(holes[k]))
        }
        holes.forEach(h=>h.dispose());
        shape.dispose();
        return csgShape.toMesh("Net-"+letter+i+"-"+weeid())
      };
    };

    function makeMaterial(scene,letters,emissive,ambient,specular,diffuse,opac){
      var cm0                    = new BABYLON.StandardMaterial("mw-matl-"+letters+"-"+weeid(), scene);
      cm0.diffuseColor           = rgb2Bcolor3(diffuse);
      cm0.specularColor          = rgb2Bcolor3(specular);
      cm0.ambientColor           = rgb2Bcolor3(ambient);
      cm0.emissiveColor          = rgb2Bcolor3(emissive);
      cm0.alpha                  = opac;
      return cm0
    };

    // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
    // These add two functions to Path2, which are needed for making font curves
    // 
    // Thanks Gijs, wherever you are
    // 
    function supplementCurveFunctions(){

      if ( !BABYLON.Path2.prototype.addQuadraticCurveTo ) {
        BABYLON.Path2.prototype.addQuadraticCurveTo = function(redX, redY, blueX, blueY){
          var points             = this.getPoints();
          var lastPoint          = points[points.length - 1];
          var origin             = new BABYLON.Vector3(lastPoint.x, lastPoint.y, 0);
          var control            = new BABYLON.Vector3(redX, redY, 0);
          var destination        = new BABYLON.Vector3(blueX, blueY, 0);
          var nb_of_points       = curveSampleSize;
          var curve              = BABYLON.Curve3.CreateQuadraticBezier(origin, control, destination, nb_of_points);
          var curvePoints        = curve.getPoints();
          for(var i=1; i<curvePoints.length; i++){
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        }
      }
      if ( !BABYLON.Path2.prototype.addCubicCurveTo ) {
        BABYLON.Path2.prototype.addCubicCurveTo = function(redX, redY, greenX, greenY, blueX, blueY){
          var points             = this.getPoints();
          var lastPoint          = points[points.length - 1];
          var origin             = new BABYLON.Vector3(lastPoint.x, lastPoint.y, 0);
          var control1           = new BABYLON.Vector3(redX, redY, 0);
          var control2           = new BABYLON.Vector3(greenX, greenY, 0);
          var destination        = new BABYLON.Vector3(blueX, blueY, 0);
          var nb_of_points       = Math.floor(0.3+curveSampleSize*1.5);
          var curve              = BABYLON.Curve3.CreateCubicBezier(origin, control1, control2, destination, nb_of_points);
          var curvePoints        = curve.getPoints();
          for(var i=1; i<curvePoints.length; i++){
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        }
      }
    }

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING 
    //
    // One can reduce file size by 50% with a content-specific compression of font strings
    // Each letter object potentially has two long values, "shapeCmds" and "holeCmds"
    // These may be optionally compressed during construction of the file
    // The compressed versions are placed in "sC" and "hC"
    // The *first* time a letter is used, if it was compressed, it is decompressed
    function makeLetterSpec(fontSpec,letter){
      var letterSpec             = fontSpec[letter],
          singleMap              = cmds      => decodeList(cmds),
          doubleMap              = cmdslists => isArray(cmdslists)?cmdslists.map(singleMap):cmdslists;

      if(isObject(letterSpec)){
        if(!isArray(letterSpec.shapeCmds)&&isArray(letterSpec.sC)){
          letterSpec.shapeCmds   = letterSpec.sC.map(singleMap)
          letterSpec.sC          = null;
        }
        if(!isArray(letterSpec.holeCmds)&&isArray(letterSpec.hC)){
          letterSpec.holeCmds    = letterSpec.hC.map(doubleMap);
          letterSpec.hC          = null;
        }
      }
      return letterSpec;
    };

    function decodeList(str){
      var split    = str.split(" "),
          list     = [];
      split.forEach(function(cmds){
        if(cmds.length===12){list.push(decode6(cmds))}
        if(cmds.length===8) {list.push(decode4(cmds))}
        if(cmds.length===4) {list.push(decode2(cmds))}
      });
      return list
      function decode6(s){return [decode1(s,0,2),decode1(s,2,4),decode1(s,4,6),decode1(s,6,8),decode1(s,8,10),decode1(s,10,12)]};
      function decode4(s){return [decode1(s,0,2),decode1(s,2,4),decode1(s,4,6),decode1(s,6,8)]};
      function decode2(s){return [decode1(s,0,2),decode1(s,2,4)]};
      function decode1(s,start,end){return (frB128(s.substring(start,end))-4000)/2};
    };
    function codeList(list){
      var str   = "",
          xtra  = "";
      if(isArray(list)){
        list.forEach(function(cmds){
          if(cmds.length===6){str+=xtra+code6(cmds);xtra=" "}
          if(cmds.length===4){str+=xtra+code4(cmds);xtra=" "}
          if(cmds.length===2){str+=xtra+code2(cmds);xtra=" "}
        });
      }
      return str;

      function code6(a){return code1(a[0])+code1(a[1])+code1(a[2])+code1(a[3])+code1(a[4])+code1(a[5])};
      function code4(a){return code1(a[0])+code1(a[1])+code1(a[2])+code1(a[3])};
      function code2(a){return code1(a[0])+code1(a[1])};
      function code1(n){return toB128((n+n)+4000)};
    };

    function frB128(s){
      var result=0,i=-1,l=s.length-1;
      while(i++<l){result = result*128+b128back[s.charCodeAt(i)]}
      return result;
    };
    function toB128(i){
      var s                      = b128digits[(i%128)];
      i                          = ??(i/128);
      while (i>0) {
        s                        = b128digits[(i%128)]+s;
        i                        = ??(i/128);
      }
      return s;
    };
    function prepArray(){
      var pntr                   = -1,n;
      b128back                   = new Uint8Array(256);
      b128digits                 = new Array(128);
      while(160>pntr++){
        if(pntr<128){
          n                      = fr128to256(pntr);
          b128digits[pntr]       = String.fromCharCode(n);
          b128back[n]            = pntr
        }else{
          if(pntr===128){
            b128back[32]         = pntr
          }else{
            b128back[pntr+71]    = pntr
          }
        }
      };
      function fr128to256(n){if(n<92){return n<58?n<6?n+33:n+34:n+35}else{return n+69}}
    };
    //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING 
    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING 
    // 
    // Screening and defaulting functions for incoming parameters
    function makePreferences(args){
      var prefs = {},p;
      if(isObject(p=args[1])){
        if(p["default-font"]){prefs.defaultFont=p["default-font"]}else{if(p.defaultFont){prefs.defaultFont=p.defaultFont}}
        if(p["mesh-origin"]){prefs.meshOrigin=p["mesh-origin"]}else{if(p.meshOrigin){prefs.meshOrigin=p.meshOrigin}}
        if(p.scale){prefs.scale=p.scale}
        if(isBoolean(p.debug)){prefs.debug=p.debug}
        return prefs
      }else{
        return { defaultFont: args[2] , scale: args[1] , debug: false }
      }
    };

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
    // Applies a test to potential incoming parameters
    // If the test passes, the parameters are used, otherwise the default is used
    function setOption(opts, field, tst, defalt) { return tst(opts[field]) ? opts[field] : defalt };

    //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING 
    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    // Conversion functions
    function rgb2Bcolor3(rgb){
      rgb                        = rgb.replace("#","");
      return new BABYLON.Color3(convert(rgb.substring(0,2)),convert(rgb.substring(2,4)),convert(rgb.substring(4,6)));
      function convert(x){return ??(1000*Math.max(0,Math.min((isNumber(parseInt(x,16))?parseInt(x,16):0)/255,1)))/1000}
    };
    function point2Vector(point){
      return new BABYLON.Vector2(round(point.x),round(point.y))
    };
    function merge(arrayOfMeshes){
      return arrayOfMeshes.length===1 ? arrayOfMeshes[0] : BABYLON.Mesh.MergeMeshes(arrayOfMeshes, true)
    };

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    // Boolean test functions
    function isPositiveNumber(mn) { return typeof mn === "number" && !isNaN(mn) ? 0 < mn : false } ;
    function isNumber(mn)         { return typeof mn === "number" } ;
    function isBoolean(mn)        { return typeof mn === "boolean" } ;
    function isAmplitude(ma)      { return typeof ma === "number" && !isNaN(ma) ? 0 <= ma && ma <= 1 : false } ;
    function isObject(mo)         { return mo != null && typeof mo === "object" || typeof mo === "function" } ;
    function isArray(ma)          { return ma != null && typeof ma === "object" && ma.constructor === Array } ; 
    function isString(ms)         { return typeof ms === "string" ? ms.length>0 : false }  ;
    function isSupportedFont(ff)  { return isObject(FONTS[ff]) } ;
    function isSupportedAnchor(a) { return a==="left"||a==="right"||a==="center" } ;
    function isRelativeLength(l)  { return l===3||l===5||l===7 } ;
    function weeid()              { return Math.floor(Math.random()*1000000) } ;
    function round(n)             { return ??(0.3+n*1000000)/1000000 }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK 
//
//

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var hpb={reverseHoles:false,reverseShapes:true},nbsp="\u00A0";
      // Letters seems to go from about -250 to 850
      hpb["A"]                     = {
        sC                         : ["KPB, KPA}K-A[ J??A:JVA: I??A:IkA?? IZB< H??CuH??Cw DgCw DVCwDTCk C??A?? C_A:B??A: B_A:B=A` A??A??A??B4 A??BNB4B?? E??LR E??L??FoL?? FoL?? GNL??GqL: KHBV KPB>KPB,"],
        hC                         : [["FwI} FuI}FsIy FqIu E0Ee E.EcE.E] E.ETE8ET H2ET H<ETH<E_ H<EcH:Ee F{Iu F{I}FwI}"]],
        xMin                       : 45,
        xMax                       : 647,
        yMin                       : -4,
        yMax                       : 751,
        wdth                       : 683
      };
      hpb["B"]                     = {
        sC                         : ["B6BZ B6K} B6LBB_Lq B??L??CDL?? E8L?? FmL??GdL) HZK4HZI?? HZHiGwGo HTG2H??FP I:EoI:D{ I:C>H:B@ G:ABE}AB CDAB B??ABB_An B6A??B6BZ"],
        hC                         : [["C??FP C??C8 C??C*D.C* EyC* FcC*F??Cn GPD0GPD?? GPETF??E?? FcF]EyF] D,F] C??FZC??FP","C??K% C??H> C??H0D,H0 E6H0 E??H2FGHq FyI.FyIw FyJ>FFJ{ E??K6E0K6 D.K6 C??K6C??K%"]],
        xMin                       : 58,
        xMax                       : 508,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 545
      };
      hpb["C"]                     = {
        sC                         : ["H#A2 EiA2C??B?? B#DuB#G. B#IkC??KL EgM.H#M. JDM.K??K?? L@KTL@J?? L@JkK??JI K}J(KLJ( J??J(JuJN IgKDH!KD F@K@E&J% C??H??C??G. C??E_E0D? FRB??H#B?? IkB??JuC?? K%D8KLD8 K}D8K??C?? L@CuL@CD L@B??K??BT JFA2H#A2"],
        xMin                       : 49,
        xMax                       : 703,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 741
      };
      hpb["D"]                     = {
        sC                         : ["E??AB C0AB B??ABB[Ad B6A??B6B4 B6K?? B6LXBZL| B??L??C4L?? E??L?? HHL??J#KA K??IeK??G0 K??D{J$B?? HJABE??AB"],
        hC                         : [["E??K4 D,K4 C??K4C??K* C??C6 C??C*D,C* E??C* GmC*H??D@ I??EVI??G0 I??H??H??I?? GsK4E??K4"]],
        xMin                       : 58,
        xMax                       : 671,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 708
      };
      hpb["E"]                     = {
        sC                         : ["HFB6 HFA??G??Ab GyABG@AB C*AB B6ABB6Ba B6K{ B6L??C(L?? GTL?? G??L??G??L~ H>L]H>K?? H>KsG??KS G??K4GTK4 D,K4 C??K4C??K* C??H2 C??H(D,H( GTH( G??H(H#G?? HFGeHFG4 HFF??H$Fa G??F>GTF> D,F> C??F>C??F4 C??C6 C??C*D,C* GTC* G??C*H#B?? HFBgHFB6"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 488
      };
      hpb["F"]                     = {
        sC                         : ["HFG4 HFF??H$Fa G??F>GTF> D,F> C??F>C??F2 C??BV C??A6C,A6 B6A6B6BV B6L* B6L_BWL?? ByL??C%L?? GTL?? G??L??G??L?? H@L_H@L2 H@K4G%K4 D,K4 C??K4C??K( C??H4 C??H(D,H( GTH( G??H(H#G?? HFGeHFG4"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : -6,
        yMax                       : 750,
        wdth                       : 485
      };
      hpb["G"]                     = {
        sC                         : ["L??FL L??C?? L??C8LHB} K??B0JmAr IXA2H%A2 EiA2C??B?? B(DsB(G0 B(IoC??KN EiM.H%M. J@M.K??K?? LDKRLDJ?? LDJmL!JI K??J%KVJ% K!J%J??JF IoKDH%KD FJKDE-J( C??H??C??G0 C??ETE-D7 FJB??H%B?? I:B??J)CK J??C}J??D2 J??ET J??EXJ??EX H@EX G??EXGqE{ GPE??GPFL GPF??GqF?? G??G@H@G@ K]G@ L0G@LYG& L??F??L??FL"],
        xMin                       : 51,
        xMax                       : 736,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 774
      };
      hpb["H"]                     = {
        sC                         : ["ILA: H??A:H{AZ HXA{HXB* HXF0 HXF<HLF< D*F< C??F<C??F0 C??B* C??A{C~AZ C]A:C*A: B{A:BXAZ B6A{B6B* B6L4 B6LeBXL?? B{M%C*M% C]M%C~L?? C??LgC??L4 C??H2 C??H%D*H% HLH% HXH%HXH2 HXL4 HXLeH{L?? H??M%ILM% I??M%I??L?? J@LgJ@L4 J@B* J@A{I??AZ I??A:ILA:"],
        xMin                       : 58,
        xMax                       : 575,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 614
      };
      hpb["I"]                     = {
        sC                         : ["C*A: B{A:BXAZ B6A{B6B* B6L4 B6LcBXL?? B{M%C*M% C]M%C~L?? C??LgC??L4 C??B* C??A}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["J"]                     = {
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["K"]                     = {
        sC                         : ["C*A: B6A:B6BT B6L4 B6L]B]L~ B??L??C,L?? CcL??C??Ly C??LRC??L( C??G?? C??G??D!G?? G#Lo GBM!G??M! H4M!HWL?? H{L]H{L0 H{K??HiKu E??GJ E??G>E??G. E??F??E??F?? HiBk H{BNH{B0 H{B( HwA{HSA[ H0A<G??A< GsA<GgA? GZABGRAE GJAHG?AS G4A_G0Ad G,AiF??A{ F??A??F??A?? D%FJ C??FP C??FPC??B* C??A}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 476,
        yMin                       : -4,
        yMax                       : 752,
        wdth                       : 519
      };
      hpb["L"]                     = {
        sC                         : ["H2B6 H2A??G??Ae GqABG@AB C.AB B??ABBZAa B6A??B6B2 B6L8 B6LiBWL?? ByM(C*M( C]M(C~L?? C??LkC??L8 C??C< C??C*D0C* G@C* GsC*G??B?? H2BiH2B6"],
        xMin                       : 50,
        xMax                       : 440,
        yMin                       : 0,
        yMax                       : 755,
        wdth                       : 474
      };
      hpb["M"]                     = {
        sC                         : ["G??DL J>KV J??M%K??M% MFM%MFJ?? MFB* MFA}M!A[ L??A:LLA: K??A:K??AZ K_A{K_B% K_H?? K_IcK]I?? KXI??K8I2 J??HeJMF?? I}D??I6CX HsA?? HTA:G??A: G!A:F??A?? D_H?? D:IiD%I?? D!I8D!H?? D!B0 D!A??C??A] CaA:C.A: B??A:BZA[ B6A}B6B* B6J?? B6K??BjL[ B??M%CuM% D.M%D`L?? D??LVE!K?? GuDL GwDDG}DD G??DDG??DL"],
        xMin                       : 58,
        xMax                       : 770,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 808
      };
      hpb["N"]                     = {
        sC                         : ["CRM% D4M#DmLJ IBDk IHD_IND_ IZD_IZDo IZL6 IZLgI|L?? I??M%JNM% J??M%K!L?? KDLgKDL4 KDBZ KDA??J??Al JoA:J%A: J%A: IBA:H??A?? D8Is D2I}D,I} C??I}C??Im C??B* C??AyC??AY C_A:C,A: B{A:BXAZ B6A{B6B* B6K?? B6LHBdLx B??M%CRM%"],
        xMin                       : 58,
        xMax                       : 641,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 679
      };
      hpb["O"]                     = {
        sC                         : ["C??B?? B(DsB(G0 B(IoC??KN EiM.H%M. JeM.LDKN N#IoN#G0 N#DsLDB?? JeA2H%A2 EiA2C??B??"],
        hC                         : [["E-J( C??H??C??G0 C??ETE-D7 FJB??H%B?? I??B??J??D7 L:ETL:G0 L:H??J??J( I??KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["P"]                     = {
        sC                         : ["C(A: ByA:BWA^ B6A??B6B0 B6K?? B6LFB^Ls B??L??CDL?? EBL?? F??L??G|K?? HwJ??HwI] HwG??G|F?? F??E??EBE?? D*E?? C??E??C??E?? C??B0 C??A??C}A] CZA:C(A:"],
        hC                         : [["C??K% C??G?? C??GyD.Gy E*Gy F!GyFXH? F??H??F??I] F??J.FXJs F!K6E*K6 D.K6 C??K6C??K%"]],
        xMin                       : 58,
        xMax                       : 474,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 509
      };
      hpb["Q"]                     = {
        sC                         : ["LuAP L]AFLFAF L%AFK??AZ KqAoK<B% I??A2H%A2 EiA2C??B?? B(DsB(G0 B(IoC??KN EiM.H%M. JeM.LDKN N#IoN#G0 N#D??LmC> M(B?? MBBmMFB8 MFA??M/Av L??AXLuAP"],
        hC                         : [["E-J( C??H??C??G0 C??ETE-D7 FJB??H%B?? I!B??I??CT I??C]IyCr IcC??IZC?? IRC??ICD) I4D:I-DF I%DRH??Db H??DqH??D?? H??E,I@EQ IeEwI??Ew J:EwJ_ER KFDg L:EwL:G0 L:H??J??J( I??KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["R"]                     = {
        sC                         : ["H??AL H??A8H]A8 H2A8G??AQ G??AkGaA?? ENE?? EHE??E:E?? D*E?? C??E??C??E?? C??BX C??A:C%A: B4A:B4BZ B4K?? B4LFB[Ls B??L??C@L?? EDL?? G!L??H#L% I%K.I%IV I%GFGDF8 G>F6G>F0 G>F.G>F. G@F* IJBZ IVBBIVB* IVAmH??AL"],
        hC                         : [["C??K% C??Gy C??GkD,Gk ETGk G@GkG@IV G@J2F??Ju FTK6ETK6 D,K6 C??K6C??K%"]],
        xMin                       : 57,
        xMax                       : 522,
        yMin                       : -5,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["S"]                     = {
        sC                         : ["B%CZ B%C??BDD( BcDHB??DH C.DHCKD6 CiD#C??C?? C??CqD/CV DHC<DpC* D??B??EFB?? E??B??FJCT F??C??F??D_ F??D_ F??EDFDE{ E??F0D??FZ C]F??B??G?? B(HgB(I?? B(K:B??L3 C??M,EPM, FDM,G*Lp G??L2H<KJ HFK0HFJ?? HFJkH#JG G??J#GRJ# F??J#FmJe F6KBEHKB D??KBDIJ?? C??JTC??I?? C??IsC??I[ C??IDD$I3 D,I!D>H?? DPH??DYHx DcHoD??Ha D??HRE#HM E.HHEPH: EsH,E}H( G@GRG??Fn HkE??HkD_ HkC.GpB0 FuA2ELA2 D#A2C$A?? B%BcB%CZ"],
        xMin                       : 50,
        xMax                       : 468,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 505
      };
      hpb["T"]                     = {
        sC                         : ["I%Ly IPLRIPL% IPK{I.KW H??K4HaK4 FuK4 FgK4FgK! FgB% FgAyFDAY F!A:EsA: E@A:D??AX D}AwD}B% D}K( D}K4DqK4 B??K4 BZK4B8KW A??K{A??L% A??LNB9Lw B]L??B??L?? HaL?? H}L??I%Ly"],
        xMin                       : 42,
        xMax                       : 519,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 556
      };
      hpb["U"]                     = {
        sC                         : ["B0Dm B0L4 B0LeBRL?? BuM%C%M% CXM%CzL?? C??LgC??L4 C??D?? C??D%DbCc E(B??E??B?? FkB??G/Cb GuD#GuD?? GuL4 GuLeG??L?? H8M%HkM% H??M%I=L?? I_LgI_L4 I_Dk I_C2HSB4 GHA6E??A6 DJA6C=B5 B0C4B0Dm"],
        xMin                       : 56,
        xMax                       : 526,
        yMin                       : -6,
        yMax                       : 754,
        wdth                       : 564
      };
      hpb["V"]                     = {
        sC                         : ["J??L2 J??K??J??K?? GHA?? G,A>F_A> E??A>EcA?? B!K?? A??K??A??L2 A??LcB<L?? B_M%B??M% C8M%CVL?? CuLwC??LP FPDe FRDc FRDaFSD` FTD_FVD_ FZD_FZDe I,LP I6LwITL?? IsM%I??M% JLM%JpL?? J??LcJ??L2"],
        xMin                       : 44,
        xMax                       : 616,
        yMin                       : -2,
        yMax                       : 754,
        wdth                       : 652
      };
      hpb["W"]                     = {
        sC                         : ["KBA: JoA>JPA?? J@BV HsH??HeH?? F??A?? FgA:E??A: E2A>D??A?? BNKo B:L:BZLj B{L??C@L?? C??L??D(LB D4K?? E??E0E??E0 E??E0FDF| FwHFG0J5 GkL#GwLR G??M#HiM# IDM#IaL8 I??J{JMH?? J??F??K%F! KDE0 KFE0KHE6 M*L< MBL??M??L?? NRL??NwLk N??L<N??K{ L6A?? K??A:KBA:"],
        xMin                       : 70,
        xMax                       : 867,
        yMin                       : -4,
        yMax                       : 753,
        wdth                       : 903
      };
      hpb["X"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Y"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Z"]                     = {
        sC                         : ["B,BT B,B{BHC( G.J?? G2K%G2K* G2K4F??K4 CLK4 B(K4B(L( B(L??CNL?? H>L?? HyL??I$Ls IRLFIRK?? IRKiI<K@ DTCF DLC6 DLC*DcC* H6C* I]C*I]B8 I]A??I;Ae H??ABHkAB CsAB B??ABBgAf B,A??B,BT"],
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["a"]                     = {
        sC                         : ['H@HR HLHqHRH| HXH??HrH?? H??I#I2I# I??I#I??G?? I??Bk I??ADI4AD H??ADHmAW HTAkH@A?? G6A2E??A2 D8A2B??BI A??CaA??E6 A??F??B??H" D8I:E??I: G4I:H@HR'],
        hC                         : [['D<F?? CgF2CgE6 CgD:D<Ce D??B??E??B?? F??B??G`Ce H4D:H4E6 H4F2G`F?? F??G_E??G_ D??G_D<F??']],
        xMin                       : 35,
        xMax                       : 552,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 584
      };
      hpb["b"]                     = {
        sC                         : ['C{A?? CaA:B??A: BgA<BGA_ B(A??B(B4 B(KF B(K??BFK?? BeLBB??LB CFLBCfK?? C??K??C??KF C??KF C??HX D??I:F,I: G??I:H??H" J2F??J2E6 J2CaH??BI G??A2F,A2 D??A2C{A??'],
        hC                         : [['G??Ce HTD:HTE6 HTF2G??F?? G(G_F,G_ E0G_D[F?? C??F2C??E6 C??D:D[Ce E0B??F,B?? G(B??G??Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 597
      };
      hpb["c"]                     = {
        sC                         : ["E??B?? F??B??G??C?? HTDaH??Da I2DaIND@ IkC??IkCw IkCgIcCN I!BLH&A?? G,A2E??A2 D@A2C)BI A??CaA??E8 A??F??C)H# D@I:E??I: F??I:G??H~ HqH@I:Ga IRGBIRF?? IRFoI4FR H??F6HmF6 HNF6G??FZ G*G]E??G] D??G]DHF?? CsF2CsE8 CsD<DHCg D??B??E??B??"],
        xMin                       : 40,
        xMax                       : 532,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 559
      };
      hpb["d"]                     = {
        sC                         : ['I%A: HXA:HBA?? G>A2E??A2 D:A2C"BI A??CaA??E6 A??F??C"H" D:I:E??I: G6I:H8HX H8KF H8K??HWK?? HwLBI%LB IZLBIyK?? I??K??I??KF I??B4 I??A??IwA^ IVA:I%A:'],
        hC                         : [['D>F?? CiF2CiE6 CiD:D>Ce D??B??E??B?? F??B??GcCe H8D:H8E6 H8F2GcF?? F??G_E??G_ D??G_D>F??']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 585
      };
      hpb["e"]                     = {
        sC                         : ["E??A2 D8A2B??BI A??CaA??E8 A??F??B??H# D8I:E??I: GVI:HsH, I??F??I??E] I??E.IoD?? INDkI!Di D:Di D!DiCwDe C??C??D_CE E,B??E??B?? F#B??F8B?? FLB??F[B?? FkB??F??B?? F??B??F??B?? G#C#G8C/ GLC:GRC= GXC@GoCM G??CZG??C] H%CqH8Cq HcCqH~CT H??C8H??B?? H??B2G??As F??A2E??A2"],
        hC                         : [['E??G] E0G]D^G" C??FkC{E?? D!E??D6E?? GiE?? GuE??G??E?? G??E??H#E?? G??FiGAG! FoG]E??G]']],
        xMin                       : 36,
        xMax                       : 561,
        yMin                       : -234,
        yMax                       : 508,
        wdth                       : 594
      };
      hpb["f"]                     = {
        sC                         : ["B??I! CaI! CaI?? CaJ??D3Ks D??LFE??LF E??LF F??LFGVK?? H%K<H%Jw H%JRG??J8 GqI??GLI?? G!I??FuJR FFJ??E??J?? E??J?? E>J??E>I?? E>I! F??I! G??I!G??H: G??GZF??GZ E>GZ E>BZ E>A6DPA6 CaA6CaBZ CaGZ B??GZ A??GZA??H@ A??I!B??I!"],
        xMin                       : 31,
        xMax                       : 434,
        yMin                       : -6,
        yMax                       : 706,
        wdth                       : 450
      };
      hpb["g"]                     = {
        sC                         : ['B??>?? Bo?0Bo?_ Bo???B??@# C*@BCV@B C??@BD(??? D???:E???: F???:Gp??? HH@??HHA?? GDA4E??A4 DJA4C2BK A??CcA??E6 A??F??C2H" DJI:E??I: GLI:HRHT H_HsH??H?? I*I*IJI* IsI*I??H?? I??HoI??HO J#H0J#G?? J#A?? J#@*H??>?? Gk=oE??=o D*=oB??>??'],
        hC                         : [['DVF?? C??F2C??E6 C??D:DVCe E,B??F(B?? G#B??G{Ce HPD:HPE6 HPF2G{F?? G#G_F(G_ E,G_DVF??']],
        xMin                       : 36,
        xMax                       : 550,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 577
      };
      hpb["h"]                     = {
        sC                         : ["B(B. B(K% B(LBB??LB C??LBC??K( C??H?? DkI:E_I: F??I:G??HD H??GNH??E?? H??BV H??A??H}Ag HaA:H,A: G<A:G<Bu G<Ee G<FLF??F?? FDG_EaG_ D??G_DCG& C??FqC??E?? C??B4 C??A??CgA_ CHA:B??A: B??A:BwA@ BsA@ B]A@BJAV BDA] B(AyB(B."],
        xMin                       : 51,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 524
      };
      hpb["i"]                     = {
        sC                         : ["B!B4 B!H6 B!HoBBH?? BcI2B??I2 C@I2CaH?? C??HoC??H6 C??B4 C??A}CaA[ C@A:B??A: BcA:BBA[ B!A}B!B4","B??I?? BeI??BCJ7 B!JXB!J?? B!K2BCKR BeKsB??Ks C>KsC`KQ C??K0C??J?? C??JXC`J7 C>I??B??I??"],
        xMin                       : 48,
        xMax                       : 159,
        yMin                       : -4,
        yMax                       : 664,
        wdth                       : 191
      };
      hpb["j"]                     = {
        sC                         : ["C:I?? B??I??BlJ7 BJJXBJJ?? BJK2BlKR B??KsC:Ks CeKsC??KQ D(K0D(J?? D(JXC??J7 CgI??C:I??","D%H8 D%?L D%>]Cd>$ B??=oB@=o B:=o A??=oAh=?? AF>,AF>_ AF>??A[>?? Aq?.A???9 A???DB5?_ BJ?yBJ??? BJH8 BJHqBkH?? B??I4C:I4 CiI4C??H?? D%HqD%H8"],
        xMin                       : 2,
        xMax                       : 179,
        yMin                       : -234,
        yMax                       : 664,
        wdth                       : 211
      };
      hpb["k"]                     = {
        sC                         : ["C??E?? EqHk E??I2F_I2 F??I2G*H?? GHHsGHHJ GHH.G8G?? EVEB EZE:E??D?? G:B_ GJBBGJB% GJA{G+A] F??A>F_A> F!A>E??Am C??Dk C??DuC??Du C??DuC??Dm C??BZ C??A??CiAh CLA:B??A: BZA:BAAc B(A??B(BZ B(K! B(LBB??LB C??LBC??K! C??E??C??E?? C??E??C??E??"],
        xMin                       : 51,
        xMax                       : 388,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 417
      };
      hpb["l"]                     = {
        // shapeCmds                  : [[[51,57],[51,642],[51,671,67,687.5],[83,704,107,704],[130,704,145.5,687.5],[161,671,161,642],[161,57],[161,29,145.5,12.5],[130,-4,107,-4],[83,-4,67,12.5],[51,29,51,57]]],
        sC                         : ['B(B4 B(KF B(K??BHK?? BiLBB??LB CFLBCfK?? C??K??C??KF C??B4 C??A}CfA[ CFA:B??A: BiA:BHA[ B(A}B(B4'],
        xMin                       : 51,
        xMax                       : 161,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 194
      };
      hpb["m"]                     = {
        sC                         : ['G<B4 G<E?? G<FZF{F?? F8G_EaG_ D??G_DCG* C??FwC??E?? C??Bi C??A:B??A: BVA:BAAd B,A??B%Bk B%G?? B%I6B??I6 C6I6CQI" CmH??CwHu DTI:E_I: G*I:H*H4 I%I:JuI: L6I:M2HD N.GNN.E?? N.Bk N.A:M@A: LPA:LPBi LPE?? LPFZK??F?? KNG_JuG_ I??G_I[G! H??FgH??E?? H??Bk H??A:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 822,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 854
      };
      hpb["n"]                     = {
        sC                         : ['G<B4 G<E?? G<FZF{F?? F8G_EaG_ EaG_ D??G_DDG) C??FuC??E?? C??Bi C??A:B??A: BVA:BAAd B,A??B%Bk B%G?? B%I6B??I6 C6I6CQI" CmH??CwHu DTI:E_I: F??I:G??HD H??GNH??E?? H??Bk H??A??H??Ah HkA:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 523
      };
      hpb["o"]                     = {
        // shapeCmds                  : [[[40,251],[40,358,115.5,433],[191,508,299,508],[406,508,481,433],[556,358,556,251],[556,143,481,67.5],[406,-8,299,-8],[191,-8,115.5,67.5],[40,143,40,251]]],
        sC                         : ['A??E8 A??F??C)H# D@I:E??I: GoI:H??H# I??F??I??E8 I??CaH??BI GoA2E??A2 D@A2C)BI A??CaA??E8'],
        // holeCmds                   : [[[[151,251],[151,189,194,146],[237,103,299,103],[360,103,402.5,146],[445,189,445,251],[445,312,402.5,354.5],[360,397,299,397],[237,397,194,354.5],[151,312,151,251]]]],
        hC                         : [['CqE8 CqD<DFCg D??B??E??B?? F??B??GhCg H<D<H<E8 H<F2GhF?? F??G]E??G] D??G]DFF?? CqF2CqE8']],
        xMin                       : 40,
        xMax                       : 556,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 581
      };
      hpb["p"]                     = {
        // shapeCmds                  : [[[106,504],[147,504,156,457],[223,508,309,508],[416,508,492,432.5],[568,357,568,250],[568,144,492,68.5],[416,-7,309,-7],[227,-7,161,41],[161,-142],[161,-170,145,-187],[129,-204,106,-204],[81,-204,66,-186.5],[51,-169,51,-142],[51,443],[51,469,67,486.5],[83,504,106,504]]],
        sC                         : ['B??I2 CiI2C{HT D??I:F,I: G??I:H??H" J2F??J2E6 J2CcH??BK G??A4F,A4 D??A4C??A?? C???% C??>oCe>L CD>*B??>* Be>*BF>M B(>qB(?% B(H8 B(HmBHH?? BiI2B??I2'],
        // holeCmds                   : [[[[414,145],[457,188,457,250],[457,312,414,355],[371,398,309,398],[247,398,204.5,355],[162,312,162,250],[162,188,204.5,145],[247,102,309,102],[371,102,414,145]]]],
        hC                         : [['G??Ce HTD:HTE6 HTF2G??F?? G(G_F,G_ E0G_D[F?? C??F2C??E6 C??D:D[Ce E0B??F,B?? G(B??G??Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 597
      };
      hpb["q"]                     = {
        // shapeCmds                  : [[[448,457],[461,504,499,504],[499,504],[522,504,538,486.5],[554,469,554,443],[554,-142],[554,-170,539,-187],[524,-204,498,-204],[475,-204,459,-187],[443,-170,443,-142],[443,41],[379,-7,295,-7],[188,-7,112.5,68],[37,143,37,250],[37,357,112.5,432.5],[188,508,295,508],[382,508,448,457]]],
        sC                         : ['HBHT H]I2I(I2 I(I2 IVI2IwH?? I??HmI??H8 I???% I??>oIy>L IZ>*I%>* Hy>*HX>L H8>oH8?% H8A?? G8A4E??A4 D:A4C"BJ A??CaA??E6 A??F??C"H" D:I:E??I: G>I:HBHT'],
        // holeCmds                   : [[[[190,355],[147,312,147,250],[147,188,190,145],[233,102,295,102],[357,102,400,145],[443,188,443,250],[443,312,400,355],[357,398,295,398],[233,398,190,355]]]],
        hC                         : [['D>F?? CiF2CiE6 CiD:D>Ce D??B??E??B?? F??B??GcCe H8D:H8E6 H8F2GcF?? F??G_E??G_ D??G_D>F??']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 585
      };
      hpb["r"]                     = {
        // shapeCmds                  : [[[351,454],[351,394,290,394],[284,394,277,395],[270,396,259,396],[218,396,189.5,369.5],[161,343,161,291],[161,90],[161,-4,107,-4],[50,-4,50,74],[50,429],[50,504,104,504],[145,504,157,451],[215,506,278,506],[310,506,330.5,490],[351,474,351,454]]],
        sC                         : ['F??HN F??GVE??GV E{GVEmGX E_GZEHGZ DwGZD=G$ C??FqC??E?? C??Bw C??A:B??A: B%A:B%BV B%G?? B%I2B??I2 CeI2C}HH DqI6EoI6 F.I6FWH?? F??HwF??HN'],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["s"]                     = {
        sC                         : ["G4CP G4B]FYA?? E??A2DZA2 CPA2BtAp A??B,A??B{ A??C!B2C= BNCXB{CX C#CXCgC+ D(B??DcB?? D??B??E4B?? EPC.EPCN EPC??DLDT CoD?? B??E<BOE?? A??FFA??G! A??G??B~Hf CZI8DoI8 E??I8FMHw F??H4F??Gy F??GRF??G8 FgF??F:F?? E??F??EOGA D??GeDVGe D2GeC??GO C??G:C??F?? C??F??C??Fk D2FTDuF. D??E?? D??E??EAE?? EgEsEwEi G4D??G4CP"],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["t"]                     = {
        // shapeCmds                  : [[[102,496],[160,496],[160,563],[160,644,216,644],[270,644,270,563],[270,496],[327,496],[400,496,400,447],[400,396,327,396],[270,396],[270,81],[270,-4,216,-4],[216,-4],[184,-4,172,17],[160,38,160,81],[160,396],[102,396],[67,396,49,406.5],[31,417,31,443],[31,472,48.5,484],[66,496,102,496]]],
        sC                         : ['B??I! C??I! C??J( C??KJDsKJ E_KJE_J( E_I! FPI! GcI!GcH@ GcGZFPGZ E_GZ E_Be E_A:DsA: DsA: D2A:C??Ae C??A??C??Be C??GZ B??GZ BHGZB#Gp A??G??A??H8 A??HsB"H?? BFI!B??I!'],
        xMin                       : 31,
        xMax                       : 400,
        yMin                       : -4,
        yMax                       : 644,
        wdth                       : 425
      };
      hpb["u"]                     = {
        // shapeCmds                  : [[[158,442],[158,213],[158,168,191,135.5],[224,103,268,103],[315,103,346.5,129],[378,155,378,207],[378,417],[378,504,432,504],[465,504,475.5,483],[486,462,489,416],[489,81],[489,-5,433,-5],[397,-5,385,28],[337,-8,269,-8],[172,-8,110,51.5],[48,111,48,206],[48,416],[48,458,59.5,481],[71,504,102,504],[126,504,142,487.5],[158,471,158,442]]],
        sC                         : ['C??H6 C??Dm C??C??D@CQ D??B??EZB?? F8B??FxCD G6CyG6Da G6G?? G6I2H!I2 HeI2HzH?? H??H_H??G?? H??Be H??A8H#A8 G]A8GDA{ FeA2E]A2 C??A2B??B) B!B??B!D_ B!G?? B!HVB9H?? BPI2B??I2 C>I2C_H?? C??HqC??H6'],
        xMin                       : 48,
        xMax                       : 489,
        yMin                       : -8,
        yMax                       : 504,
        wdth                       : 521
      };
      hpb["v"]                     = {
        // shapeCmds                  : [[[182,34],[43,431],[39,443,39,450],[39,473,55.5,489],[72,505,95,505],[119,505,132,489],[145,473,155,443],[223,226],[232,196,238,181],[252,219,265.5,262.5],[279,306,295.5,361],[312,416,320,443],[330,473,343,489],[356,505,380,505],[380,505],[403,505,420,488.5],[437,472,437,450],[437,443,433,431],[294,34],[280,-4,238,-4],[195,-4,182,34]]],
        sC                         : ['D.A?? A??G?? A??H8A??HF A??HuB1H?? BRI4B??I4 C0I4CJH?? CeHuCyH8 D??D?? D??DJD??D, E:DyEUEO EqF%E??F?? F2G??FBH8 FVHuFqH?? F??I4G:I4 G:I4 GiI4G??H?? H,HsH,HF H,H8H#G?? E??A?? EsA:D??A: DHA:D.A??'],
        xMin                       : 39,
        xMax                       : 437,
        yMin                       : -4,
        yMax                       : 505,
        wdth                       : 465
      };
      hpb["w"]                     = {
        sC                         : ["C??A?? A??H* A??H.A??H@ A??HiB,H?? BJI*B}I* CPI*CgHk CyH0 DeD??D??C?? F<H_ FTI2G(I2 GLI2GkH?? G??H??G??Hg H#H, I(DoIDC?? IFC??IFC?? JiHk JqH??J??H?? K(I*KNI* K??I*L!H?? L@HqL@HB L@H:L<H* JHA?? J.A:IXA: H{A:H]A?? HNB8G??C?? G<EsG%F. G#F, EsA?? ERA:DuA: C??A:C??A??"],
        xMin                       : 38,
        xMax                       : 703,
        yMin                       : -4,
        yMax                       : 504,
        wdth                       : 730
      };
      hpb["x"]                     = {
        sC                         : ["D??Cu D??CmDsCX CyA?? CRA:B??A: B]A:B<A[ A??A}A??B( A??BBB>B{ C??E4 B>Go A??G??A??H@ A??HoB=H?? B_I0B??I0 C:I0CZH?? CyHe DsF?? D??F}D??Fu D??F}D??F?? E??He FDI0F??I0 G4I0GRH?? GqHiGqH8 GmH#GiG?? GPGo E??EV E??EPE??E4 E??E0E??E$ E??D??E??D?? GeBa GuBDGuB* GuA{GRAZ G0A:F??A: FBA:E??A?? D??Cs D??CuD??Cu"],
        xMin                       : 45,
        xMax                       : 409,
        yMin                       : -4,
        yMax                       : 503,
        wdth                       : 435
      };
      hpb["y"]                     = {
        sC                         : ["G??G?? D???! De>JDJ>4 D2>!C??>! C_>!C>>B B??>cB??>?? B???#C%?8 C??Aq C??A??C??B% C??B. A??G?? AyH8AyHF AyHuA??H?? B8I4BiI4 B??I4C2H?? CJHsC_H6 DkD?? D??D4D??D% D??D4E*D?? F6H6 FBH_FMHv FXH??FrH?? F??I4G,I4 G_I4G~H?? G??HsG??HF G??H8G??G??"],
        xMin                       : 27,
        xMax                       : 429,
        yMin                       : -208,
        yMax                       : 505,
        wdth                       : 457
      };
      hpb["z"]                     = {
        // shapeCmds                  : [[[342,0],[130,0],[48,0,48,58],[48,58],[48,82,60,99],[226,347],[254,389],[231,393,196,393],[102,393],[82,393,65,409],[48,425,48,447],[48,469,64,484.5],[80,500,102,500],[312,500],[350,500,373,484],[396,468,396,439],[396,426,390,415],[372,384],[358,360,283,251.5],[208,143,190,110],[206,107,247,107],[342,107],[362,107,379,91],[396,75,396,54],[396,32,380,16],[364,0,342,0]]],
        sC                         : ['FoAB CFAB B!ABB!B6 B!B6 B!BgB:B?? D??Fy E>GL D??GTDJGT B??GT BgGTBDGu B!G??B!H@ B!HmBBH?? BcI*B??I* F2I* F??I*G,H?? GZHkGZH0 GZG??GNG?? G*GB F??F??EyE9 DcCaD>B?? D_B??E0B?? FoB?? F??B??G8By GZBXGZB. GZA??G:Ac F??ABFoAB'],
        xMin                       : 48,
        xMax                       : 396,
        yMin                       : 0,
        yMax                       : 500,
        wdth                       : 426
      };
      hpb["0"]                     = {
        // shapeCmds                  : [[[475,66.5],[401,-8,300,-8],[199,-8,124.5,65],[50,138,50,241],[50,508],[50,608,124,682.5],[198,757,300,757],[399,757,474,685],[549,613,549,508],[549,241],[549,141,475,66.5]]],
        sC                         : ['HyBG GeA2E??A2 DPA2C;BD B%CVB%E# B%I: B%J??C:K?? DNM,E??M, GaM,HwK?? I??J??I??I: I??E# I??C]HyBG'],
        // holeCmds                   : [[[[300,639],[245,639,205,598.5],[165,558,165,506],[165,243],[165,190,205,149.5],[245,109,300,109],[354,109,393,149],[432,189,432,243],[432,506],[432,560,393,599.5],[354,639,300,639]]]],
        hC                         : [['E??K@ E,K@D]Jp C??I??C??I6 C??E( C??D>D]Cn E,B??E??B?? F??B??GTCm H!D<H!E( H!I6 H!J!GTJr F??K@E??K@']],
        xMin                       : 50,
        xMax                       : 549,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["1"]                     = {
        // shapeCmds                  : [[[390,12.5],[373,-4,348,-4],[323,-4,306.5,12.5],[290,29,290,53],[290,633],[290,643,281,643],[228,643],[205,643,189.5,658.5],[174,674,174,696],[174,719,189.5,734.5],[205,750,227,750],[361,750],[381,750,394,736],[407,722,407,701],[407,53],[407,29,390,12.5]]],
        sC                         : ['GNA[ G,A:F{A: FHA:F&A[ E??A}E??B, E??K4 E??KHEuKH D??KH D]KHD=Kh C??K??C??L2 C??LaD=L?? D]L??D??L?? F??L?? G<L??GVL?? GqLgGqL< GqB, GqA}GNA['],
        xMin                       : 174,
        xMax                       : 407,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["2"]                     = {
        sC                         : ["H??AB C_AB B??ABBeAn B2A??B2Ba B2C!BeCX BuCkC??Dh D??EeE??Fl G!GsGPH4 G??H??G??IT G??J6GPJ} F??KBF(KB EXKBD??J?? D_JgDDI?? D8I{C??Ie CyINCTIN C%INB??Iq BcI??BcJB BcJVBiJi B??KwC??LP D??M*F(M* GkM*HuK?? I??J??I??IT I??H??I_HD I>GyH??G> HqF??H!F4 GTEeG$E: FwD??E??D? E<CoD??CV D??C@ D{C4D{C0 D{C*D??C* H??C* I2C*I]B?? I??B_I??B4 I??A??IdAe I@ABH??AB"],
        xMin                       : 56,
        xMax                       : 546,
        yMin                       : 0,
        yMax                       : 756,
        wdth                       : 600
      };
      hpb["3"]                     = {
        sC                         : ["BBD> BBDqB`D?? B}E8C.E8 CTE8CvD?? C??D??C??D_ D6C??DxCP E8B??E??B?? FwB??G?Ce G??D0G??D?? G??E??GFFY F??G.F#G6 EwG>EWG^ E8G}E8H% E8HREUHp EsH??E??H?? F:I*FWIR FuI{FuJ: FuJwFYJ?? F>K@E??K@ ENK@D??J?? DHJDC??JD CwJDCUJl C4J??C4K< C4KgCBK?? D6M.E??M. F??M.GsLI HVKeHVJL HVI@GwHB H%H! IqF??IqD?? IqCLHeB? GXA2E??A2 DgA2CXB& BJB??BBD>"],
        xMin                       : 64,
        xMax                       : 535,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 600
      };
      hpb["4"]                     = {
        // shapeCmds                  : [[[561,181],[561,154,542.5,141],[524,128,505.5,125.5],[487,123,487,119],[487,67],[487,36,472,16.5],[457,-3,428,-3],[400,-3,385,17.5],[370,38,370,67],[370,119],[370,125,364,125],[124,125],[39,125,39,193],[39,214,52,238],[341,690],[353,709,362,720],[371,731,386.5,741.5],[402,752,420,752],[487,752,487,667],[487,243],[487,237,493,237],[500,237],[561,230,561,181]]],
        sC                         : ['J#D, J#CwI??C] IZCBI5C= H??C8H??C0 H??BH H??A??HsAd HTA<G??A< GcA<GDAf G%A??G%BH G%C0 G%C<F??C< C:C< A??C<A??DD A??DoB*D?? FmL% F??LLF??Lc G(LyGGL?? GgM!G??M! H??M!H??Ky H??E( H??D??H??D?? I*D?? J#D??J#D,'],
        // holeCmds                   : [[[[184,237],[364,237],[370,237,370,244],[370,539],[369,542],[368,542,366,540],[182,243],[181,242,181,240],[181,237,184,237]]]],
        hC                         : [['D2D?? F??D?? G%D??G%E* G%Iy G#I?? G!I??F??I{ D.E( D,E%D,E! D,D??D2D??']],
        xMin                       : 39,
        xMax                       : 561,
        yMin                       : -3,
        yMax                       : 752,
        wdth                       : 600
      };
      hpb["5"]                     = {
        sC                         : ['E??A2 DsA2CvA?? ByBLB:CN B(CwB(C?? B(D4BLDX BqD}B??D} CeD}C??D, D,CiDpC@ E2B??E??B?? F??B??GPCl H!D>H!E6 H!F,GOF?? F}GPE??GP E@GPDlG/ C??F??CwF?? C@F??B??G7 BgGaBgG?? BgH,BiH8 CNL# CTLPC??Lw D*L??D_L?? G??L?? H>L??HjLz H??LTH??L, H??K??HqK` HLK8G??K8 D??K8 D??K8D??K* DyJRDlI?? D_IPDYI: DTI#DTH?? DXI!DtI( D??I.E:I4 EgI:E??I: G]I:HtH" I??F??I??E6 I??CaHtBI G]A2E??A2'],
        xMin                       : 51,
        xMax                       : 548,
        yMin                       : -8,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["6"]                     = {
        // shapeCmds                  : [[[308,509],[414,504,487.5,433.5],[561,363,561,253],[561,144,485,68],[409,-8,301,-8],[190,-8,114,67.5],[38,143,38,253],[38,329,73,384],[288,722],[309,754,341,754],[366,754,382.5,737],[399,720,399,695],[399,676,388,660],[304,532],[295,520,289,508],[294,509,308,509]]],
        sC                         : ['F*I< G??I2H??H$ J#F??J#E< J#CcH??BJ GuA2E??A2 D>A2C%BI A??CaA??E< A??FTBTGB E??Lg F,M%FmM% F??M%G?L?? GaLcGaL0 GaK??GJKk F!Ik E??IRE??I: E??I<F*I<'],
        // holeCmds                   : [[[[300,398],[238,398,196.5,356.5],[155,315,155,253],[155,191,196.5,149.5],[238,108,300,108],[362,108,403,149.5],[444,191,444,253],[444,314,402.5,356],[361,398,300,398]]]],
        hC                         : [['E??G_ D??G_DKF?? CyF8CyE< CyD@DKCn D??B??E??B?? F??B??GiCn H:D@H:E< H:F6GhF?? F??G_E??G_']],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["7"]                     = {
        // shapeCmds                  : [[[193,-4],[170,-4,152,13.5],[134,31,134,54],[134,67,136,70],[381,628],[382,632,382,633],[382,636,378,636],[141,636],[119,636,103,653],[87,670,87,693],[87,716,103,733],[119,750,141,750],[421,750],[463,750,487,724],[511,698,511,660],[511,651,506,631],[245,31],[230,-4,193,-4]]],
        sC                         : ['DDA: C??A:CsA^ CNA??CNB. CNBHCRBN G<K* G>K2G>K4 G>K:G6K: C]K: C0K:B??K] BqK??BqL, BqLZB??L} C0L??C]L?? G??L?? HaL??H??Lk I@L6I@Kk I@KXI6K0 E,A?? D??A:DDA:'],
        xMin                       : 87,
        xMax                       : 511,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["8"]                     = {
        sC                         : ["E??A2 DPA2CDB? B8CLB8D?? B8EkBdFE B??F??CVG] C??G?? B??H??B??I?? B??K>C|L5 DsM,E??M, G>M,H7L5 I0K>I0I?? I0I*HTH< H(G?? H??F??INFB I{EmI{D?? I{CNHnB@ GaA2E??A2"],
        hC                         : [["GJFC F??F??E??F?? E2F??DiFC C??E{C??D?? C??D*DiCa E2B??E??B?? F??B??GHCa G??D*G??D?? G??E{GJFC","F??J?? FcKFE??KF ERKFD??J?? DiJ]DiI?? DiILD??H?? EPHcE??Hc FcHcF??H?? GJINGJI?? GJJ_F??J??"]],
        xMin                       : 59,
        xMax                       : 540,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["9"]                     = {
        sC                         : ["E??D?? D4E%B??F3 A??G@A??H?? A??JwC%K?? D>M%E??M% GuM%H??K?? J#JyJ#H?? J#G??I_F?? F0As E??A2EFA2 D??A2DtAT DRAwDRB( DRBNDiBo E??Do E??DwE??D?? E??D??F$D?? F*D??F.D?? F#D??E??D??"],
        hC                         : [["E??F{ F??F{GhGM H:G??H:H?? H:I??GhJl F??K>E??K> D??K>DJJl CyI??CyH?? CyH!DKGN D??F{E??F{"]],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["%"]                     = {
        shapeCmds                  : [
                                       [[278,4],[271,-3,264,-3],[251,-3,243,5],[235,13,235,26],[235,36,239,43],[604,735],[608,743,617,743],[618,743,620,742],[627,749,637,749],[648,749,655,741.5],[662,734,662,723],[662,712,657,705],[641,676],[294,17],[288,4,278,4]],
                                       [[548,53],[495,106,495,180],[495,254,548,307],[601,360,675,360],[749,360,802,307],[855,254,855,180],[855,106,802,53],[749,0,675,0],[601,0,548,53]],
                                       [[101,443],[48,496,48,570],[48,644,101,697],[154,750,228,750],[302,750,355,697],[408,644,408,570],[408,496,355,443],[302,390,228,390],[154,390,101,443]]
                                     ],  

        holeCmds                   : [
                                      [],
                                      [[[607.5,247.5],[580,220,580,180],[580,140,607.5,112.5],[635,85,675,85],[715,85,742.5,112.5],[770,140,770,180],[770,220,742.5,247.5],[715,275,675,275],[635,275,607.5,247.5]]],
                                      [[[160.5,637.5],[133,610,133,570],[133,530,160.5,502.5],[188,475,228,475],[268,475,295.5,502.5],[323,530,323,570],[323,610,295.5,637.5],[268,665,228,665],[188,665,160.5,637.5]]]
                                    ],
        xMin                       : 48,
        xMax                       : 855,
        yMin                       : -3,
        yMax                       : 750,
        wdth                       : 892
      };
      hpb["#"]                     = {
        sC                         : ['BwEu DHEu DsH% C2H% BTH%BTHi BTH??BgH?? ByI,B??I, D??I, E#J??E4K?? E@L:ENLN E]LcE??Lc E??LcF0LS FBLDFBL* FBK??E??I, G??I, H6J??HFK?? HPL6H`LL HoLcH??Lc I*LcI>LR IRLBIRL, IRL*IQK?? IPK??IPK?? H??I, JaI, K<I,K<Hi K<H%J{H% H??H% HaEu I??Eu J??EuJ??E0 J??DoI??Do HLDo HFD0H5C< H#BHG??A?? G??AcG??AM GyA8GRA8 G4A8G"AI F??AZF??Aq F??A?? G#C%GFDo E:Do D??B??D??A?? D??AaDtAL DgA8D@A8 D#A8C??AH C??AXC??Aq C??A??C??A?? D2Do BuDo A??DoA??E0 A??EuBwEu'],
        hC                         : [["G??H% E{H% EPEu GZEu G??H%"]],
        xMin                       : 42,
        xMax                       : 637,
        yMin                       : -5,
        yMax                       : 720,
        wdth                       : 673
      };
      hpb["$"]                     = {
        sC                         : ["EB??? D]???D]@?? D]A< CXARB??A?? B(BkA??CV A??C??B@D( BaDLB??DL CTDLC??C{ D0B??E6B?? E??B??FACS F{C??F{D_ F{D??FeEB FNEoF#E?? E{F(ETF9 E.FJDwF] A??GLA??I?? A??K#BxK?? CPL}D]L?? D]MV D]NTEBNT EqNTE??N7 F(M??F(Mm F(L?? F??L??GLLM G??K??H4K@ H:J??H:J?? H:JmG??JR GqJ8G>J8 FwJ8F_Je F*KBE>KB DwKBDAJ?? C??JTC??I?? C??IgC??ID D.I!D@H?? DRH{D??Ha E,HFE>H> EPH6E??G?? G<GNG??Fj HaE??HaD_ HaCLG??BY G.AgF(AB F(@s F(@FE??@) Eq???EB???"],
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["?"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["!"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["|"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["("]                     = {
        // shapeCmds                 : [[[51,541],[51,701,170,793],[185,805,205,805],[228,805,243.5,789.5],[259,774,259,751],[259,729,244,714],[196,667,181.5,623],[167,579,167,505],[167,198],[167,123,181.5,80],[196,37,244,-10],[259,-25,259,-48],[259,-70,243.5,-86],[228,-102,205,-102],[187,-102,170,-90],[51,4,51,162]]],
        sC                         : ['B(I} B(L<C??Mu D4M??D]M?? D??M??E)Mn EHMNEHL?? EHLuE*LV DJKyD-J?? C??JHC??I4 C??DN C??C8D-Bc DJA??E*A. EH@??EH@c EH@6E)??? D???wD]?w D8?wC????? B(AJB(C??'],
        xMin                       : 51,
        xMax                       : 259,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 297
      };
      hpb[")"]                     = {
        // shapeCmds                 : [[[257,162],[257,2,139,-90],[124,-102,104,-102],[81,-102,65.5,-86.5],[50,-71,50,-48],[50,-24,64,-10],[112,38,126.5,80.5],[141,123,141,198],[141,505],[141,580,126.5,623.5],[112,667,64,714],[50,728,50,751],[50,774,65.5,789.5],[81,805,104,805],[122,805,139,793],[257,701,257,541]]],
        sC                         : ['EDC?? EDAFCX??? C:?wB???w Be?wBE??? B%@4B%@c B%@??BBA. C!A??C?Bd C]C8C]DN C]I4 C]JJC?J?? C!KyBBLV B%LsB%L?? B%MNBEMn BeM??B??M?? C6M??CXMu EDL<EDI}'],
        xMin                       : 50,
        xMax                       : 257,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 295
      };
      hpb["-"]                     = {
        shapeCmds                  : [[[106,332],[308,332],[374,332,374,287],[374,242,308,242],[123,242],[57,242,57,287],[57,308,70,320],[83,332,106,332]]],
        xMin                       : 57,
        xMax                       : 374,
        yMin                       : 242,
        yMax                       : 332,
        wdth                       : 412
      };
      hpb["_"]                     = {
        shapeCmds                  : [[[57,-127],[57,-64],[613,-64],[613,-127],[57,-127]]],
        xMin                       : 57,
        xMax                       : 613,
        yMin                       : -127,
        yMax                       : -64,
        wdth                       : 651
      };
      hpb["="]                     = {
        fullPath                   : "M 107 306 L 107 306 L 465 306 Q 514 306 514 261 L 514 261 Q 514 255 513 253 L 513 253 Q 514 250 514 245 L 514 245 Q 514 200 465 200 L 465 200 L 107 200 Q 58 200 58 245 L 58 245 L 58 253 L 58 261 Q 58 306 107 306 Z",
        shapeCmdsOrig              : [[[107,306],[465,306],[514,306,514,261],[514,255,513,253],[514,250,514,245],[514,200,465,200],[107,200],[58,200,58,245],[58,253],[58,261],[58,306,107,306]]],
        shapeCmds                  : [
                                      [[107,306-60 ],[465,306-60 ],[514,306-60 ,514,261-60 ],[514,255-60 ,513,253-60 ],[514,250-60 ,514,245-60 ],[514,200-60 ,465,200-60 ],[107,200-60 ],[58,200-60 ,58,245-60 ],[58,253-60 ],[58,261-60 ],[58,306-60 ,107,306-60 ]],
                                      [[107,306+130],[465,306+130],[514,306+130,514,261+130],[514,255+130,513,253+130],[514,250+130,514,245+130],[514,200+130,465,200+130],[107,200+130],[58,200+130,58,245+130],[58,253+130],[58,261+130],[58,306+130,107,306+130]]
                                     ],
        xMin                       : 58,
        xMax                       : 514,
        yMin                       : 200,
        yMax                       : 306,
        wdth                       : 553
      };
      hpb["+"]                     = {
        sC                         : ["B??E?? E(E?? E(H0 E(H{E=H?? ERI2E??I2 F.I2FCH?? FXHyFXH0 FXE?? HqE?? IuE??IuE> IuDgHqDg FXDg FXBN FXA??FCAh F.AJE??AJ ERAJE=Ah E(A??E(BN E(Dg B??Dg A??DgA??E> A??EsB-E?? BNE??B??E??"],
        xMin                       : 37,
        xMax                       : 537,
        yMin                       : 4,
        yMax                       : 504,
        wdth                       : 572
      };
      hpb[","]                     = {
        // fullPath                   : "M 43 65 Q 43 88 57 103 Q 71 118 91 118 Q 115 118 128.5 101 Q 142 84 142 59 L 142 -51 Q 142 -61 133 -69 Q 124 -77 114 -77 Q 96 -77 74.5 -30.5 Q 53 16 43 65 Z",
        // shapeCmds                  : [[[43,65],[43,88,57,103],[71,118,91,118],[115,118,128.5,101],[142,84,142,59],[142,-51],[142,-61,133,-69],[124,-77,114,-77],[96,-77,74.5,-30.5],[53,16,43,65]]],
        sC                         : ['A??BD A??BsB4B?? BPC.ByC. C(C.CCB?? C_BkC_B8 C_@] C_@HCL@8 C:@(C%@( B??@(BW@?? B,AcA??BD'],
        xMin                       : 43,
        xMax                       : 142,
        yMin                       : -77,
        yMax                       : 118,
        wdth                       : 180
      };
      hpb["."]                     = {
        // shapeCmds                  : [[[66,10.5],[51,25,51,45],[51,65,66.5,80.5],[82,96,103,96],[122,96,137,80.5],[152,65,152,45],[152,25,137.5,10.5],[123,-4,103,-4],[81,-4,66,10.5]]],
        sC                         : ['BFAW B(AuB(A?? B(BDBGBd BgB??B??B?? C6B??CTBd CsBDCsA?? CsAuCUAW C8A:B??A: BeA:BFAW'],
        xMin                       : 51,
        xMax                       : 152,
        yMin                       : -4,
        yMax                       : 96,
        wdth                       : 190
      };
      hpb[nbsp]                    = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb[" "]                     = hpb[nbsp];

  /*
// https://opentype.js.org/glyph-inspector.html
function coordinates(cmd){
  if(cmd.x1){
    return " "+cmd.x1+" "+(0-cmd.y1)+" "+cmd.x+" "+(0-cmd.y)
  }else{
    if(cmd.x){
      return " "+cmd.x+" "+(0-cmd.y)
    }else{
      return ""
    }
  }
};
function makeD(path){
  var d  = "";
  path.commands.forEach(function(cmd){d+=" "+cmd.type+coordinates(cmd)});
  return d.slice(1)
}
*/

      return hpb;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HELVETICANEUE  HELVETICANEUE  HELVETICANEUE
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["0"]        = {
        sC      : [
                           'EoLV G??LVHwJc IRI*IRF?? IRDRHwB?? G??A%EoA% C_A%BgB?? A??DRA??F?? A??I*BgJc C_LVEoLV'
                         ],
        hC       : [
                           ['EoBe GoBeGoF?? GoJ??EoJ?? CoJ??CoF?? CoBeEoBe']
                         ],
        xMin           : 36,
        xMax           : 520,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["1"]        = {
        sC      : [
                           'D??H?? B,H?? B,JR CHJPD4J?? E,KDEDL: F??L: F??AB D??AB D??H??'
                         ],
        xMin           : 53,
        xMax           : 350,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["2"]        = {
        sC      : [
                           'D!B?? ILB?? ILAB A??AB A??C??DDET E#E??E??FT FoF??G#Ge GiH<GkH?? GmI??G>JB F??J??E??J?? C??J??C??H: B*H: B*J*C%K< D(LVE??LV GuLVHoKB INJLINI( ING*F??EP F!D??E.D4 D<C]D!B??'
                         ],
        xMin           : 39,
        xMax           : 518,
        yMin           : 0,
        yMax           : 714,
        wdth           : 556
      };
      font["3"]        = {
        sC      : [
                           'D??FL D??Gw E??GqF_H! G@HZG@IR G@J*F??Jb FFJ??EgJ?? DwJ??D8JC C{IoC??H{ A??H{ B#JLB??KN C??LVEkLV F??LVG??Ky I#J??I#Ia I#G{G_G4 G_G0 HTF??H??F9 I]EZI]DR I]B??HHA?? G<A%EmA% C??A%B??B, A??C,A??D?? CeD?? CaC??D#C: DkBeEmBe FcBeG-C& GyCkGyD_ GyF]D??FL'
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["4"]        = {
        sC      : [
                           'H!EB IVEB IVC?? H!C?? H!AB FJAB FJC?? AsC?? AsEq FJL: H!L: H!EB'
                         ],
        hC       : [
                           ['FJJ* FFJ* C!EB FJEB FJJ*']
                         ],
        xMin           : 24,
        xMax           : 522,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["5"]        = {
        sC      : [
                           'C??F< B!F< C8L: H??L: H??Jo DcJo C??G?? C??G?? D??HqE??Hq GmHqHeGk IVFkIVD?? IVCZHgBN GaA%EsA% C??A%B??A?? A??B??A??DP CmDP CwCaD:C! D??BeEoBe GsBeGsD?? GsE??G2Fe FkG<EiG< D6G<C??F<'
                         ],
        xMin           : 35,
        xMax           : 522,
        yMin           : -14,
        yMax           : 700,
        wdth           : 556
      };
      font["6"]        = {
        sC      : [
                           'I<IX GXIX GPJ.F??Jd FeJ??E??J?? DkJ??D#Io C{H??CkG8 CoG4 DLHZE??HZ GiHZHcGT IVFRIVD?? IVC6HUB. GTA%E??A% CgA%BkB} A??D*A??F?? A??I%B{Jk C??LVE??LV G@LVH:Kl I4J??I<IX'
                         ],
        hC       : [
                           ['E}Be FqBeG4C> GsC??GsD?? GsE??G2FS FsG%E}G% D??G%D@FP C??E??C??D?? C??C??D@C> D??BeE}Be']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["7"]        = {
        sC      : [
                           'G_Jo A??Jo A??L: IFL: IFJ} EmFeE<AB CBAB CXC??DqFD E}HoG_Jo'
                         ],
        xMin           : 35,
        xMax           : 514,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["8"]        = {
        sC             : [
                           'EoA% C??A%B??A?? A??B??A??D_ A??EaBEF; B??F??C??G4 C??G6 B:G??B:IX B:J??C,Kr C??LVEoLV G>LVH0Kr I!J??I!IX I!G??G]G6 G]G4 HRF??H??F; I]EaI]D_ I]B??HRA?? GHA%EoA%'
                         ],
        hC             : [
                           ['EoBZ FcBZG-B?? GyCgGyD_ GyEPG-E?? FcFTEoFT D{FTD/E?? CeEPCeD_ CeCgD/B?? D{BZEoBZ','EoK! D??K!DPJj C??J0C??IL C??HmDOH5 D??G??EoG?? FPG??F??H5 GJHmGJIL GJJ0F??Jj FNK!EoK!']
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["9"]        = {
        sC             : [
                           'A??D# C??D# C??CNDBB?? DyBeEPBe FsBeG8C?? GcDuGsFD GoFH F??D??E@D?? C{D??B??E?? A??G!A??Hy A??JJB??KP C??LVEiLV G}LVHuJ?? IVIRIVF{ IVDVHcB?? GVA%EFA% C??A%C!A?? B(B}A??D#'
                         ],
        hC             : [
                           ['E_J?? DiJ??D%JB CkIuCkH{ CkG??D%G. DiFTE_FT FXFTF??G. G]G??G]H{ G]IsF??JE FXJ??E_J??']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["a"]        = {
        sC             : [
                           'H??G< H??C( H??BZIRBZ IsBZI??B_ I??A@ I@A%H{A% GcA%GJB# FJA%DeA% CNA%BoAs A??BDA??CT A??D??B??EL CPE{D??E?? FiF6FiF6 GFFRGFG( GFH4EqH4 C??H4C??F?? B(F?? B<IiE??Ii G(IiG??I# H??HTH??G<'
                         ],
        hC             : [
                           ['G8C?? G8EH F??E,F8D?? EmD??D??D?? CgDkCgC_ CgB??D2Bw DmBZE8BZ E??BZF_B?? G8C<G8C??']
                         ],
        xMin           : 32,
        xMax           : 548,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["??"]        = supplement(font.a,"acute",158,0);
      font["??"]        = supplement(font.a,"grave",158,0);
      font["??"]        = supplement(font.a,"dieresis",158,0);
      font["??"]        = supplement(font.a,"circumflex",158,0);
      font["??"]        = supplement(font.a,"ring",158,0);
      font["??"]        = {
        sC             : [
                           'L??C?? NwC?? NJBeMLA?? LNA%K!A% H??A%H%Be G%A%DyA% CVA%BqAs A??BBA??CT A??D??B??EL CPE{D??E?? F]F4FcF6 G:FPG:G( G:H4EqH4 C??H4C??F?? B(F?? B4HHCBH?? D8IiEyIi GyIiHVH] I@IiJ??Ii L??IiM??HP N??GBN??EL N??E,N??D?? H??D?? H??C??IPC8 I??BZJ??BZ LTBZL??C??'
                         ],
        hC             : [
                           ['G8D* G8ED F??E(FBD?? EsD??E!D?? CgDmCgC_ CgBZE6BZ E??BZFgB?? G8CJG8D*','H??F! L??F! L??F??LVGj K??H4J??H4 I??H4IZGc H??F??H??F!']
                         ],
        xMin           : 32,
        xMax           : 863,
        yMin           : -14,
        yMax           : 531,
        wdth           : 889
      };
      font["b"]        = {
        sC             : [
                           'C??AB B@AB B@LV D#LV D#HF D(HF DVH??E,I< E??IiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F??A% DsA%C??BP C??BP C??AB'
                         ],
        hC             : [
                           ['H]EF H]F]G??GD GDH4F>H4 E2H4DhGR C??FqC??EF C??D%DkC@ E8BZF>BZ GNBZG??CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["c"]        = {
        sC             : [
                           'IXFs GuFs GXH4E??H4 D??H4DNGo CmF??CmE< CmD*D*CJ DuBZE??BZ FcBZG"B?? GeCXGuDF IXDF H??A%E??A% C??A%B??B@ A??CPA??E< A??G2B??HH C??IiE??Ii GDIiH@H?? IHH(IXFs'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["??"]        = {
        sC             : [
                           'GuDF IXDF H??A<F(A* Ec@N Ec@J Es@PF#@P Fg@PF??@, GN???GN?< GN>_F??>. F@=??E]=?? DV=??C??>2 D2>?? D??>cE4>c F.>cF.?4 F.?XE???m Ew???ER??? E%???D???m DX??? EJA* CuA:B}BP A??C_A??E< A??G2B??HH C??IiE??Ii GDIiH@H?? IHH(IXFs GuFs GXH4E??H4 D??H4DNGo CmF??CmE< CmD*D*CJ DuBZE??BZ FcBZG"B?? GeCXGuDF'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -221,
        yMax           : 531,
        wdth           : 556
      };
      font["??"]        = supplement(font.c,"caron",158,0);
      font["d"]        = {
        sC             : [
                           'H#LV I??LV I??AB H0AB H0BN H,BN GVA%EmA% C??A%B??BF A??CZA??EN A??GVB??Hi C??IiEHIi G<IiG??HF H#HF H#LV'
                         ],
        hC             : [
                           ['CmE< CmD*D0CH D??BZE??BZ F??BZGiCN H,D2H,EH H,FsG`GS F??H4E??H4 D{H4D,G> CmFZCmE<']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["e"]        = {
        sC             : [
                           'IeD?? CmD?? CmC??D0C6 D{BZE??BZ GBBZG??C?? IVC?? I2BaH1A?? G0A%E??A% C??A%B??B< A??CRA??EF A??G*B??HF C??IiE}Ii GVIiHcHH IiG2IiEX IiE2IeD??'
                         ],
        hC             : [
                           ['CmF! G??F! G{F??G3Ge FmH4E}H4 D??H4D<Gg CqF??CmF!']
                         ],
        xMin           : 35,
        xMax           : 531,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["??"]        = supplement(font.e,"acute",158,0);
      font["??"]        = supplement(font.e,"grave",158,0);
      font["??"]        = supplement(font.e,"dieresis",158,0);
      font["??"]        = supplement(font.e,"circumflex",158,0);
      font["f"]        = {
        sC      : [
                           'B??H! ATH! ATIL B??IL B??J! B??KVCVK?? C??LVD??LV E??LVF<LH F<J?? E??K!ERK! DcK!DcJ6 DcIL F#IL F#H! DcH! DcAB B??AB B??H!'
                         ],
        xMin           : 9,
        xMax           : 317,
        yMin           : 0,
        yMax           : 714,
        wdth           : 315
      };
      font["g"]        = {
        sC             : [
                           'G??IL IwIL IwAy Iw>(E{>( DF>(CL>o B:?BB,@k C??@k D0?RE???R G???RG??AZ G??By G??By G(ABEXAB CoABBwBe A??CsA??Ec A??G<B??HN C??IiE]Ii G:IiG??H> G??H> G??IL'
                         ],
        hC             : [
                           ['E}Bw F??BwGRCi G??DJG??E_ G??FqGRGL F??H4E}H4 DqH4D(G@ CmFaCmEL CmD@D,Cc DwBwE}Bw']
                         ],
        xMin           : 35,
        xMax           : 538,
        yMin           : -205,
        yMax           : 531,
        wdth           : 593
      };
      font["h"]        = {
        sC             : [
                           'C??AB B:AB B:LV C??LV C??HD D!HD DNH??D??I: EuIiFXIi G??IiHfH?? IFH4IFF?? IFAB GcAB GcFL GcH4E??H4 E(H4DdGg C??F??C??F# C??AB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["i"]        = {
        sC             : [
                           'D#J?? B@J?? B@LV D#LV D#J??',
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["??"]        = {
        sC             : [
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 500,
        wdth           : 241
      };
      font["??"]        = supplement(font["??"],"acute",0,0);
      font["??"]        = supplement(font["??"],"grave",0,0);
      font["??"]        = supplement(font["??"],"dieresis",0,0);
      font["??"]        = supplement(font["??"],"circumflex",0,0);
      font["j"]        = {
        sC      : [
                           'D#J?? B@J?? B@LV D#LV D#J??',
                           'B@@u B@IL D#IL D#@k D#>(A}>( AR>(@??>0 @???e AR?]Ae?] A???]B2??? B@???B@@u'
                         ],
        xMin           : -22,
        xMax           : 177,
        yMin           : -205,
        yMax           : 714,
        wdth           : 241
      };
      font["k"]        = {
        sC      : [
                           'D#AB B@AB B@LV D#LV D#F* G@IL IXIL FLFP I??AB GiAB E,E8 D#D4 D#AB'
                         ],
        xMin           : 63,
        xMax           : 542,
        yMin           : 0,
        yMax           : 714,
        wdth           : 537
      };
      font["l"]        = {
        sC             : [
                           'D#AB B@AB B@LV D#LV D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["m"]        = {
        sC             : [
                           'C??AB B:AB B:IL C??IL C??H< C??H< D??IiFVIi H4IiHyH< IuIiK<Ii M??IiM??F?? M??AB L2AB L2E?? L2G0K??Gg KqH4JwH4 H??H4H??E?? H??AB G6AB G6FZ G6GJF??G?? FeH4E??H4 E!H4DaGm C??G#C??F( C??AB'
                         ],
        xMin           : 60,
        xMax           : 810,
        yMin           : 0,
        yMax           : 531,
        wdth           : 870
      };
      font["n"]        = {
        sC             : [
                           'C??AB B:AB B:IL C??IL C??H4 C??H0 D??IiFXIi G??IiHfH?? IFH4IFF?? IFAB GcAB GcFL GcH4E??H4 E(H4DdGg C??F??C??F# C??AB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 531,
        wdth           : 574
      };
      font["??"]        = supplement(font.n,"tilde",167,0);
      font["??"]        = supplement(font.n,"acute",167,0);
      font["o"]        = {
        sC             : [
                           'E??A% C??A%B??B@ A??CTA??EH A??G:B??HQ C??IiE??Ii G??IiH??HN I??G:I??EH I??CTH??B@ G??A%E??A%'
                         ],
        hC             : [
                           ['E??BZ G#BZGuCN H:D2H:EH H:F]GuG@ G#H4E??H4 D??H4D4G@ CoF]CoEH CoD2D4CN D??BZE??BZ']
                         ],
        xMin           : 36,
        xMax           : 558,
        yMin           : -14,
        yMax           : 531,
        wdth           : 593
      };
      font["??"]        = supplement(font.o,"circumflex",176,0);
      font["??"]        = supplement(font.o,"grave",176,0);
      font["??"]        = supplement(font.o,"acute",176,0);
      font["??"]        = supplement(font.o,"dieresis",176,0);
      font["p"]        = {
        sC             : [
                           'D#>D B@>D B@IL C??IL C??H@ C??H@ DyIiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F??A% D??A%D(BH D#BH D#>D'
                         ],
        hC             : [
                           ['H]EF H]F]G??GD GDH4F>H4 E2H4DhGR C??FqC??EF C??D%DkC@ E8BZF>BZ GNBZG??CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["q"]        = {
        sC             : [
                           'H0IL I??IL I??>D H#>D H#BH G??BH G:A%EFA% CoA%BuBL A??CaA??EB A??G2B??HF C??IiEmIi GPIiH,H@ H0H@ H0IL'
                         ],
        hC             : [
                           ['CmEF CmD.D.CL D{BZE??BZ F??BZGgC@ H,C??H,EF H,FqGbGR F??H4E??H4 D??H4D4GD CmF]CmEF']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["r"]        = {
        sC             : [
                           'C??AB B:AB B:IL C??IL C??G?? C??G?? D(HZD??H?? E]IiFBIi F]IiF??Ic F??G?? FHG??F6G?? E<G??DqG4 C??FTC??E. C??AB'
                         ],
        xMin           : 60,
        xMax           : 363,
        yMin           : 0,
        yMax           : 531,
        wdth           : 352
      };
      font["s"]        = {
        sC             : [
                           'A??C?? CgC?? CwBZEPBZ G<BZG6Cc G2DBE??Dm C]E4CDE@ A??E??A??G@ A??HZC*I( C??IiEHIi FwIiGgH?? HeHLHyG* F??G* FqH4E8H4 C}H4C}GJ C}F??DgF] D{FTFLF# GiE??H2EL H??D??H??Cw H??BLG??As F??A%ELA% C??A%B??A?? A??B_A??C??'
                         ],
        xMin           : 32,
        xMax           : 492,
        yMin           : -14,
        yMax           : 531,
        wdth           : 519
      };
      font["t"]        = {
        sC             : [
                           'B??H! ARH! ARIL B??IL B??K?? DcK?? DcIL F0IL F0H! DcH! DcC{ DcC*DsB?? D??BmEPBm E??BmF0Bu F0AD D??A8D??A8 CuA8C4A} B??B4B??C@ B??H!'
                         ],
        xMin           : 8,
        xMax           : 311,
        yMin           : -5,
        yMax           : 672,
        wdth           : 333
      };
      font["u"]        = {
        sC             : [
                           'GcIL IFIL IFAB GgAB GgBR GcBR G8A??FfAV E??A%E<A% B:A%B:D< B:IL C??IL C??DR C??BZEeBZ GcBZGcDu GcIL'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : -14,
        yMax           : 517,
        wdth           : 574
      };
      font["??"]        = supplement(font.u,"acute",167,0);
      font["??"]        = supplement(font.u,"grave",167,0);
      font["??"]        = supplement(font.u,"dieresis",167,0);
      font["??"]        = supplement(font.u,"circumflex",167,0);
      font["v"]        = {
        sC      : [
                           'FLAB DLAB ATIL CLIL ERC2 EVC2 GRIL I>IL FLAB'
                         ],
        xMin           : 9,
        xMax           : 510,
        yMin           : 0,
        yMax           : 517,
        wdth           : 519
      };
      font["w"]        = {
        sC      : [
                           'E??AB C??AB A]IL CNIL D??CH D??CH F_IL HDIL I??CH I??CH KTIL M<IL JyAB H??AB GNGB GJGB E??AB'
                         ],
        xMin           : 13,
        xMax           : 765,
        yMin           : 0,
        yMax           : 517,
        wdth           : 778
      };
      font["x"]        = {
        sC      : [
                           'CVAB AJAB DPEc AkIL C??IL EVF?? G8IL I@IL FaEo ImAB GZAB ETD@ CVAB'
                         ],
        xMin           : 4,
        xMax           : 533,
        yMin           : 0,
        yMax           : 517,
        wdth           : 537
      };
      font["y"]        = {
        sC      : [
                           'D6@w DPAF AHIL CBIL EPCH ETCH GZIL IHIL F6@?? Es?RE>>?? Di>(CH>( By>(B*>4 B*?u B???gB???g C_?gC????? C??@*D6@w'
                         ],
        xMin           : 3,
        xMax           : 515,
        yMin           : -205,
        yMax           : 517,
        wdth           : 519
      };
      font["??"]        = supplement(font.y,"dieresis",139,0);
      font["z"]        = {
        sC      : [
                           'F*G?? A??G?? A??IL H_IL H_H, C??Bw H}Bw H}AB AoAB AoBc F*G??'
                         ],
        xMin           : 22,
        xMax           : 477,
        yMin           : 0,
        yMax           : 517,
        wdth           : 500
      };
      font["A"]        = {
        sC      : [
                           'C6AB A4AB EXLV GcLV K??AB I}AB HwD< D<D< C6AB'
                         ],
        hC       : [
                           ['F_Ja FXJa D??E{ H4E{ F_Ja']
                         ],
        xMin           : -7,
        xMax           : 675,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["??"]        = supplement(font.A,"acute",197,213);
      font["??"]        = supplement(font.A,"grave",197,213);
      font["??"]        = supplement(font.A,"tilde",197,213);
      font["??"]        = supplement(font.A,"circumflex",197,213);
      font["??"]        = supplement(font.A,"dieresis",197,213);
      font["??"]        = supplement(font.A,"ring",197,213);
      font["??"]        = {
        sC             : [
                           'CJAB A4AB F{LV O{LV O{J?? JBJ?? JBG?? ONG?? ONF< JBF< JBB?? O??B?? O??AB HTAB HTD0 DwD0 CJAB'
                         ],
        hC             : [
                           ['HTJ?? G??J?? EREo HTEo HTJ??']
                         ],
        xMin           : -7,
        xMax           : 930,
        yMin           : 0,
        yMax           : 714,
        wdth           : 963
      };
      font["B"]        = {
        sC      : [
                           'GkAB BZAB BZLV G??LV IVLVJGK} K8K!K8Iu K8G??ImGD ImG@ KyF??KyDP KyB??J}B6 IsABGkAB'
                         ],
        hC       : [
                           ['G??FL DTFL DTB?? G??B?? I??B??I??Dq I??FLG??FL','GmJ?? DTJ?? DTG?? GmG?? HHG??H??H4 I>HiI>IF I>J??GmJ??']
                         ],
        xMin           : 76,
        xMax           : 667,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["C"]        = {
        sC      : [
                           'K??H?? I??H?? IVK,G:K, EeK,DoI?? C??HoC??F?? C??E*DoC?? EeBmG:Bm HZBmI<CZ I??D>J%Ec K??Ec K??CaJdB@ I<@??G:@?? D??@??CDB?? A??DPA??F?? A??IJCDJ?? D??LyG:Ly I0LyJVKy K??JsK??H??'
                         ],
        xMin           : 38,
        xMax           : 684,
        yMin           : -17,
        yMax           : 731,
        wdth           : 722
      };
      font["D"]        = {
        sC      : [
                           'G*AB BZAB BZLV G*LV IeLVJ??J?? K??IHK??F?? K??DPJ??B?? IeABG*AB'
                         ],
        hC       : [
                           ['FJJ?? DTJ?? DTB?? FJB?? HZB??ILD! J%D??J%F?? J%H??ILIw HZJ??FJJ??']
                         ],
        xMin           : 76,
        xMax           : 687,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["E"]        = {
        sC      : [
                           'JmAB BZAB BZLV J_LV J_J?? DTJ?? DTG?? J#G?? J#F< DTF< DTB?? JmB?? JmAB'
                         ],
        xMin           : 76,
        xMax           : 597,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["??"]        = supplement(font.E,"acute",195,197);
      font["??"]        = supplement(font.E,"grave",195,197);
      font["??"]        = supplement(font.E,"circumflex",195,197);
      font["??"]        = supplement(font.E,"dieresis",195,197);
      font["F"]        = {
        sC      : [
                           'DTAB BZAB BZLV J4LV J4J?? DTJ?? DTG?? IZG?? IZF< DTF< DTAB'
                         ],
        xMin           : 76,
        xMax           : 569,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["G"]        = {
        sC      : [
                           'GXG2 L8G2 L8AB J??AB JsBk I??A{I-AM HJ@??GD@?? D??@??CNB?? A??DPA??F?? A??IHCNJ?? D??LyGDLy I8LyJ]K} K??J{L(H?? J4H?? J!I??I6Je HRK,GDK, EoK,DyI?? C??HoC??F?? C??E*DyC?? EmBoGDBm H??BkIjCS JPD<JTEu GXEu GXG2'
                         ],
        xMin           : 43,
        xMax           : 699,
        yMin           : -17,
        yMax           : 731,
        wdth           : 759
      };
      font["H"]        = {
        sC      : [
                           'DNAB BTAB BTLV DNLV DNG?? IXG?? IXLV KRLV KRAB IXAB IXFF DNFF DNAB'
                         ],
        xMin           : 73,
        xMax           : 648,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["I"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTAB'
                         ],
        xMin           : 76,
        xMax           : 201,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["J"]        = {
        sC      : [
                           'FcLV H]LV H]D?? H]C,G??B: F??@??D??@?? C.@??B@B# A]B??A]Dk A]E6 CVE6 CVDm CVCmC??C0 D.BmD??Bm E??BmF:C4 FcCqFcD?? FcLV'
                         ],
        xMin           : 13,
        xMax           : 461,
        yMin           : -17,
        yMax           : 714,
        wdth           : 537
      };
      font["K"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTGL IPLV K??LV GJG?? L,AB IuAB E??Fm DTE! DTAB'
                         ],
        xMin           : 76,
        xMax           : 693,
        yMin           : 0,
        yMax           : 714,
        wdth           : 685
      };
      font["L"]        = {
        sC      : [
                           'J*AB BZAB BZLV DTLV DTB?? J*B?? J*AB'
                         ],
        xMin           : 76,
        xMax           : 564,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["M"]        = {
        sC             : [
                           'DDAB BVAB BVLV E6LV H@Cy HDCy KDLV M??LV M??AB L2AB L2I?? L.I?? I!AB GTAB DHI?? DDI?? DDAB'
                         ],
        xMin           : 74,
        xMax           : 815,
        yMin           : 0,
        yMax           : 714,
        wdth           : 889
      };
      font["N"]        = {
        sC             : [
                           'D>AB BPAB BPLV DXLV IeD: IiD: IiLV KVLV KVAB INAB DDI] D>I] D>AB'
                         ],
        xMin           : 71,
        xMax           : 650,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["??"]        = supplement(font.N,"tilde",197,241);
      font["O"]        = {
        sC             : [
                           'G:Ly IsLyK0J?? LgIHLgF?? LgDPK0B?? Is@??G:@?? D??@??CDB?? A??DPA??F?? A??IHCDJ?? D??LyG:Ly'
                         ],
        hC             : [
                           ['G:K, EeK,DoI?? C??HoC??F?? C??E*DoC?? EeBmG:Bm H??BmI??C?? JmE*JmF?? JmHoI??I?? H??K,G:K,']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -17,
        yMax           : 731,
        wdth           : 760
      };
      font["??"]        = supplement(font.O,"acute",260,197);
      font["??"]        = supplement(font.O,"grave",260,197);
      font["??"]        = supplement(font.O,"circumflex",260,197);
      font["??"]        = supplement(font.O,"dieresis",260,197);
      font["??"]        = supplement(font.O,"tilde",260,197);
      font["P"]        = {
        sC             : [
                           'DTAB BZAB BZLV GPLV IaLVJ]K< K6JLK6H?? K6GoJ]F?? IaEgGPEg DTEg DTAB'
                         ],
        hC             : [
                           ['GFJ?? DTJ?? DTG2 GBG2 H%G2HkGe I<H!I<H?? I<J??GFJ??']
                         ],
        xMin           : 76,
        xMax           : 634,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["Q"]        = {
        sC             : [
                           'J??Bi LTAH KZ@@ I??Aw Hs@??G:@?? D??@??CDB?? A??DPA??F?? A??IHCDJ?? D??LyG:Ly IsLyK0J?? LgIHLgF?? LgD*J??Bi'
                         ],
        hC             : [
                           ['HZB?? GJC?? HBD?? IqC?? JmD??JmF?? JmHoI??I?? H??K,G:K, EeK,DoI?? C??HoC??F?? C??E*DoC?? EeBmG:Bm G??BmHZB??']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -65,
        yMax           : 731,
        wdth           : 760
      };
      font["R"]        = {
        sC             : [
                           'DTAB BZAB BZLV G??LV ImLVJeKr K]J??K]IT K]G>IqFm IqFi KDFJKDD: KDA??K??AB I??AB IaA??IaB?? IaDcI(E4 HkE??GDE?? DTE?? DTAB'
                         ],
        hC             : [
                           ['GkJ?? DTJ?? DTGL GoGL IcGLIcI0 IcJ??GkJ??']
                         ],
        xMin           : 76,
        xMax           : 680,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["S"]        = {
        sC             : [
                           'A??D?? C??D?? C??C??DiC2 EFBmFiBm G??BmHRC0 H??CkH??DD H??EHG??Eu G??E{DwFk B:G@B:IT B:J??C_K?? DqLyFDLy H.LyIFK?? JiJ??JiI0 HoI0 H_K,F:K, ERK,D??J?? D4JTD4Is D4HiE_H; F??G??H{GL I??G#JLF8 J??EVJ??Da J??B??I_A?? HD@??FX@?? DT@??C6A?? A??B??A??D??'
                         ],
        xMin           : 33,
        xMax           : 615,
        yMin           : -17,
        yMax           : 731,
        wdth           : 648
      };
      font["T"]        = {
        sC             : [
                           'D??J?? ARJ?? ARLV JVLV JVJ?? F??J?? F??AB D??AB D??J??'
                         ],
        xMin           : 8,
        xMax           : 586,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["U"]        = {
        sC             : [
                           'BJED BJLV DDLV DDE?? DDDTDsC?? E<ByF??By HmByI6C?? IeDTIeE?? IeLV K_LV K_ED K_C8J>B( I#@??F??@?? D??@??CmB( BJC8BJED'
                         ],
        xMin           : 68,
        xMax           : 654,
        yMin           : -17,
        yMax           : 714,
        wdth           : 722
      };
      font["??"]        = supplement(font.U,"acute",241,197);
      font["??"]        = supplement(font.U,"grave",241,197);
      font["??"]        = supplement(font.U,"circumflex",241,197);
      font["??"]        = supplement(font.U,"dieresis",241,197);
      font["V"]        = {
        sC             : [
                           'G*AB D??AB A8LV C<LV F!Cm F%Cm H??LV J??LV G*AB'
                         ],
        xMin           : -5,
        xMax           : 616,
        yMin           : 0,
        yMax           : 714,
        wdth           : 611
      };
      font["W"]        = {
        sC             : [
                           'FHAB DFAB ANLV CLLV ENC?? ERC?? GsLV IsLV K??C?? K??C?? M??LV O??LV L??AB J??AB HqI?? HmI?? FHAB'
                         ],
        xMin           : 6,
        xMax           : 938,
        yMin           : 0,
        yMax           : 714,
        wdth           : 944
      };
      font["X"]        = {
        sC             : [
                           'A<AB E6G% A_LV C??LV FLH_ H??LV K6LV G_G% KXAB I(AB FDEe CZAB A<AB'
                         ],
        xMin           : -3,
        xMax           : 651,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Y"]        = {
        sC             : [
                           'GHAB ENAB ENEs A6LV CXLV FRGV IFLV K_LV GHEs GHAB'
                         ],
        xMin           : -6,
        xMax           : 654,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Z"]        = {
        sC             : [
                           'H0J?? B0J?? B0LV JoLV JoJ?? D.B?? J??B?? J??AB AqAB AqB?? H0J??'
                         ],
        xMin           : 23,
        xMax           : 608,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["??"]        = {
        sC             : [
                           'BRIi D_Ii D_Go BRGo BRIi',
                           'C??FZ DVAm DV>T B]>T B]Am B??FZ C??FZ'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : -183,
        yMax           : 531,
        wdth           : 278
      };
      font["!"]        = {
        sC             : [
                           'D_AB BRAB BRC< D_C< D_AB',
                           'B??DP B]I: B]LV DVLV DVI: C??DP B??DP'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["|"]        = {
        sC             : [
                           'C??@?? B:@?? B:Ly C??Ly C??@??'
                         ],
        xMin           : 60,
        xMax           : 162,
        yMin           : -17,
        yMax           : 731,
        wdth           : 222
      };
      font['"']        = {
        sC             : [
                           'F??H! EHH! EHLV F??LV F??H!',
                           'D4H! BiH! BiLV D4LV D4H!'
                         ],
        xMin           : 83,
        xMax           : 361,
        yMin           : 432,
        yMax           : 714,
        wdth           : 444
      };
      font["'"]        = {
        sC             : [
                           'D>H! BsH! BsLV D>LV D>H!'
                         ],
        xMin           : 88,
        xMax           : 190,
        yMin           : 432,
        yMax           : 714,
        wdth           : 278
      };
      font["#"]        = {
        sC             : [
                           'GwE} H??E} H??Dg GcDg G%AB E??AB F@Dg DeDg D(AB B??AB CBDg A??Dg A??E} CXE} C}G?? B@G?? B@H?? C??H?? DJL: EmL: E0H?? F??H?? GHL: HkL: H.H?? IZH?? IZG?? G??G?? GwE}'
                         ],
        hC             : [
                           ['FVE} F{G?? D??G?? DyE} FVE}']
                         ],
        xMin           : 34,
        xMax           : 524,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["$"]        = {
        sC             : [
                           'AeDu CHDu CDB]EHBT EHF8 CwFsB??G> A??H,A??Iq A??K%B??K?? C??LyEHLy EHM?? E??M?? E??Ly G]LyHTK?? ITK0ITIs GqIs GgKDE??KD E??G?? G??GcHgF?? IyF%IyDc IyB??HoA?? GsA*E??@?? E????? EH??? EH@?? CkA#BgA?? AcB??AeDu'
                         ],
        hC             : [
                           ['E??F% E??BT G??BgG??DB G??E(GHEa F??E??E??F%','EHH4 EHKD CgKDCgI?? CgHmEHH4']
                         ],
        xMin           : 17,
        xMax           : 539,
        yMin           : -95,
        yMax           : 809,
        wdth           : 556
      };
      font["%"]        = {
        sC             : [
                           'E4F: C??F:C2G0 BgG??BgIH BgJwC6Ka C??LVE4LV FZLVG2Ka G??JwG??IH G??G??G6G0 FaF:E4F:',
                           'L??A% KuA%J??A?? JRB??JRD4 JREcK!FL K{GBL??GB NFGBN??FL OoEcOoD4 OoB??O!A?? NLA%L??A%',
                           'Fg@?? EJ@?? KTLk LmLk Fg@??'
                         ],
        hC             : [
                           ['C??IH C??G<E2G< FNG<FNIH FNKTE2KT C??KTC??IH'],
                           ['K??D4 K??B(L??B( N:B(N:D4 N:F@L??F@ K??F@K??D4'],
                           []
                         ],
        xMin           : 82,
        xMax           : 918,
        yMin           : -24,
        yMax           : 724,
        wdth           : 1000
      };
      font["&"]        = {
        sC             : [
                           'KoAB IVAB HTBc G:A%EDA% C}A%B??A?? A??B??A??DN A??FDDJGm C:I!C:J# C:K<C??K?? D??LyE??Ly G,LyG??L! H}KDH}J! H}HBF{G8 HXE, HyE??H??Fm JLFm J4D??I]C?? KoAB'
                         ],
        hC             : [
                           ['GZC{ EBFV D<E??D4E} CgE8CgDJ CgCZD%B?? DgBZELBZ F8BZF??B?? F??C,GZC{','E??KN E_KNE2K! D??JwD??J0 D??IuE4I0 E_H{E??HB FZH{F}I! G0I_G0J* G0JsF??J?? FaKNE??KN']
                         ],
        xMin           : 32,
        xMax           : 662,
        yMin           : -14,
        yMax           : 731,
        wdth           : 648
      };
      font["{"]        = {
        sC             : [
                           'A:D?? A:F8 AyF8B.FV BwF??BwGJ BwJg BwKeCVL6 D#LyDwLy F,Ly F,KD E>KD DNKDDNJ8 DNG2 DNFHC??E?? CHEkB??Ea B??E] DNEHDNC?? DN@?? DN?yE>?y F,?y F,>D Dw>D D#>DCV>?? Bw?XBw@V BwCc BwD8B.De AyD??A:D??'
                         ],
        xMin           : -4,
        xMax           : 309,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["}"]        = {
        sC             : [
                           'E??F8 E??D?? E]D??E(Dg D_D>D_Cs D_@V D_?XC??>?? C0>DB_>D A(>D A(?y A???y B???yB??@?? B??C?? B??DuCVE, C??ERDVE] DVEa B??EuB??G> B??J8 B??KDA??KD A(KD A(Ly B_Ly C0LyC??L6 D_KeD_Jg D_GZ D_F??E(FX E]F8E??F8'
                         ],
        xMin           : -13,
        xMax           : 300,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["("]        = {
        sC             : [
                           'E??>D DD>D B#A??B#E_ B#I<DDLy E??Ly C??I@C??E_ C??AeE??>D'
                         ],
        xMin           : 49,
        xMax           : 286,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font[")"]        = {
        sC             : [
                           'A2Ly BmLy D??I,D??E] D??A}Bm>D A2>D C(AyC(E] C(IVA2Ly'
                         ],
        xMin           : -8,
        xMax           : 229,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font["*"]        = {
        sC             : [
                           'B:H2 CFIo AiJ: A??K< CqJg CqLV DyLV DyJg FRK< F??J: D??Io F*H2 E@Ge D2I( C*Ge B:H2'
                         ],
        xMin           : 19,
        xMax           : 352,
        yMin           : 401,
        yMax           : 714,
        wdth           : 370
      };
      font["+"]        = {
        sC             : [
                           'B!F! E4F! E4I6 F??I6 F??F! I??F! I??DV F??DV F??AB E4AB E4DV B!DV B!F!'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 0,
        yMax           : 506,
        wdth           : 600
      };
      font[","]        = {
        sC             : [
                           'CVAB BLAB BLCP DcCP DcAB Dc@HC???t CL>??BT>?? BT??? B?????C6@G CX@??CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 135,
        wdth           : 278
      };
      font["-"]        = {
        sC             : [
                           'FkDw B#Dw B#FN FkFN FkDw'
                         ],
        xMin           : 49,
        xMax           : 340,
        yMin           : 218,
        yMax           : 326,
        wdth           : 389
      };
      font["."]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 135,
        wdth           : 278
      };
      font["/"]        = {
        sC             : [
                           'Bq@?? @??@?? ETLy G.Ly Bq@??'
                         ],
        xMin           : -22,
        xMax           : 374,
        yMin           : -17,
        yMax           : 731,
        wdth           : 352
      };
      font[":"]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB',
                           'DcG( BLG( BLI6 DcI6 DcG('
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 506,
        wdth           : 278
      };
      font[";"]        = {
        sC             : [
                           'DcG( BLG( BLI6 DcI6 DcG(',
                           'CVAB BLAB BLCP DcCP DcAB Dc@HC???t CL>??BT>?? BT??? B?????C6@G CX@??CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 506,
        wdth           : 278
      };
      font["<"]        = {
        sC             : [
                           'D*E< I??B?? I??A2 A??Du A??E?? I??IF I??G{ D*E<'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["="]        = {
        sC             : [
                           'B!DX I??DX I??B?? B!B?? B!DX',
                           'B!Gm I??Gm I??E?? B!E?? B!Gm'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 101,
        yMax           : 405,
        wdth           : 600
      };
      font[">"]        = {
        sC             : [
                           'A??A2 A??B?? G??E< A??G{ A??IF I??E?? I??Du A??A2'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["??"]        = {
        sC             : [
                           'DgGo DgIi FsIi FsGo DgGo',
                           'GTA?? I8A?? I:@:H7?6 G4>2EX>2 C??>2B??>?? B#???B#A< B#B8B]B?? B{C<CWC?? D4DXDRD?? D??EXD??FZ F]FZ F]E4F6DZ E??C??E@CD DcBsDNBZ C??A??C??AD C??@_Dg??? D???qEc?q FZ?qF??@> GT@??GTA??'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : -200,
        yMax           : 531,
        wdth           : 556
      };
      font["?"]        = {
        sC             : [
                           'FoAB DcAB DcC< FoC< FoAB',
                           'C??H?? B#H?? B!JoC$Kt D(LyE??Ly GBLyH=K?? I8J??I8Ie I8HiH??G?? HcGeG??F?? G(FHF??E?? FXEHFXDF D??DF D??EmE%FF EFF??E??G] F{H.F??HF G>H??G>I] G>JJFyJ?? F>K:E{K: C??K:C??H??'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : 0,
        yMax           : 731,
        wdth           : 556
      };
      font["@"]        = {
        sC      : [
                           'I??I?? J??I?? I??Eq IqE2IqD?? IqDgI??Dg JuDgKDEc K??FgK??G?? K??IqJ{Jw IeKwG??Kw E??KwDfJI CDH??CDF?? CDD??DoCN E??B!G??B! J*B!KVCi LcCi K??BNJdAx ID@??G??@?? ER@??C??By B#DTB#G% B#IRC~K$ EVLyG??Ly I??LyKVKT L??J*L??H. L??E??KqDo J_CZIHCZ HXCZHRDN HNDN GiC]FoC] EsC]D??D8 DJD??DJE?? DJG_EBHy FDI??G??I?? H??I??IaH?? I??I??'
                         ],
        hC       : [
                           ['F??Ds G??DsHXEo I%F_I%GV I%G??HxHQ HHH??G??H?? F??H??F@G?? EuG#EuF( EuEXE??E$ FLDsF??Ds']
                         ],
        xMin           : 49,
        xMax           : 751,
        yMin           : -17,
        yMax           : 731,
        wdth           : 800
      };
      font["["]        = {
        sC      : [
                           'E??>D BR>D BRLy E??Ly E??KD D*KD D*?y E???y E??>D'
                         ],
        xMin           : 72,
        xMax           : 295,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["]"]        = {
        sC      : [
                           'ADLy D??Ly D??>D AD>D AD?y C*?y C*KD ADKD ADLy'
                         ],
        xMin           : 1,
        xMax           : 224,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["^"]        = {
        sC      : [
                           'E??JN D6Fa BkFa ERL: FcL: IJFa G??Fa E??JN'
                         ],
        xMin           : 84,
        xMax           : 516,
        yMin           : 335,
        yMax           : 700,
        wdth           : 600
      };
      font["_"]        = {
        sC      : [
                           'I*@, I*?H AB?H AB@, I*@,'
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 500
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };

      return font;


      function supplement(basis,extra,offsetX,offsetY){
        var glyph      = {
              xMin     : basis.xMin,
              xMax     : basis.xMax,
              yMin     : basis.yMin,
              yMax     : basis.yMax,
              wdth     : basis.wdth
            },
            shapes     = basis.sC.map(shape=>shape),
            holes      = typeof basis.hC === "object" ? basis.hC.map(hole=>hole) : undefined ,
            extraShapes= extra === "dieresis" ? 2 : 1 , 
            extraHoles = extra === "ring" ? 1 : 0 ;

        if ( extraShapes === 2 ) {
          if ( holes ) { holes.unshift([]) }
          if ( extra === "dieresis" ) { shapes.unshift(dieresisRightCoded(offsetX,offsetY)) }
        }
        if ( extraHoles ) {
          if ( typeof holes !== "object" ) {
            holes      = basis.sC.map(shape=>[])
          }
          if ( extra === "ring" ) {
            holes.unshift(ringHoleCoded(offsetX,offsetY)) 
          }
        } else {
          if ( holes ) { holes.unshift([]) }
        }

        if ( extra === "dieresis" )   { 
          glyph.yMax   = dieresisYmax(offsetY);
          shapes.unshift(dieresisLeftCoded(offsetX,offsetY))
        }
        if ( extra === "circumflex" ) {
          glyph.yMax   = circumflexYmax(offsetY);
          shapes.unshift(circumflexCoded(offsetX,offsetY)) 
        }
        if ( extra === "acute" )      { 
          glyph.yMax   = acuteYmax(offsetY);
          shapes.unshift(acuteCoded(offsetX,offsetY)) 
        }
        if ( extra === "grave" )      { 
          glyph.yMax   = graveYmax(offsetY);
          shapes.unshift(graveCoded(offsetX,offsetY)) 
        }
        if ( extra === "tilde" )      { 
          glyph.yMax   = tildeYmax(offsetY);
          shapes.unshift(tildeCoded(offsetX,offsetY))
        }
        if ( extra === "ring" )       { 
          glyph.yMax   = ringYmax(offsetY);
          shapes.unshift(ringCoded(offsetX,offsetY))
        }
        glyph.sC       = shapes;
        if ( holes ) {
          glyph.hC     = holes
        }
        return glyph     
      };

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
      // To support non-english letters, we need a variety of new symbols: acute, dieresis, etc.
      // It turns out that these symbols can be re-used, with some placement changes
      // To save space and code, that's what we do
      // These functions return the special symbols in compressed or raw forms
      function acuteRaw(dx,dy){
        return [[128+dx,588+dy],[45+dx,588+dy],[135+dx,731+dy],[270+dx,731+dy]]
      };
      function acuteCoded(dx,dy){
        return codeList(acuteRaw(dx,dy))
      };
      function acuteYmax(y){return 731+y};

      function graveRaw(dx,dy){
        return [[113+dx,588+dy],[-29+dx,731+dy],[105+dx,731+dy],[196+dx,588+dy]]
      };
      function graveCoded(dx,dy){
        return codeList(graveRaw(dx,dy))
      };
      function graveYmax(y){return 731+y};

      function circumflexRaw(dx,dy){
        return [[120+dx,678+dy],[50+dx,588+dy],[-42+dx,588+dy],[65+dx,731+dy],[176+dx,731+dy],[284+dx,588+dy],[191+dx,588+dy]]
      };
      function circumflexCoded(dx,dy){
        return codeList(circumflexRaw(dx,dy))
      };
      function circumflexYmax(y){return 731+y};

      function caronRaw(dx,dy){
        return [[284+dx,731+dy],[176+dx,588+dy],[65+dx,588+dy],[-42+dx,731+dy],[50+dx,731+dy],[120+dx,642+dy],[191+dx,731+dy]]
      };
      function caronCoded(dx,dy){
        return codeList(caronRaw(dx,dy))
      };
      function caronYmax(y){return 731+y};

      function dieresisLeftRaw(dx,dy){
        return [[92+dx,599+dy],[-22+dx,599+dy],[-22+dx,707+dy],[92+dx,707+dy]]
      };
      function dieresisLeftCoded(dx,dy){
        return codeList(dieresisLeftRaw(dx,dy))
      };
      function dieresisRightRaw(dx,dy){
        return [[150+dx,707+dy],[264+dx,707+dy],[264+dx,599+dy],[150+dx,599+dy]]
      };
      function dieresisRightCoded(dx,dy){
        return codeList(dieresisRightRaw(dx,dy))
      };
      function dieresisYmax(y){return 707+y};

      function tildeRaw(dx,dy){
        return [[297+dx,714+dy],[279+dx,599+dy,186+dx,599+dy],[163+dx,599+dy,113.5+dx,617.5+dy],[64+dx,636+dy,43+dx,636+dy],[26+dx,636+dy,13.5+dx,623+dy],[1+dx,610+dy,1+dx,595+dy],[-56+dx,595+dy],[-49+dx,639+dy,-24+dx,671+dy],[6+dx,708+dy,48+dx,708+dy],[81+dx,708+dy,127.5+dx,689+dy],[174+dx,670+dy,191+dx,670+dy],[229+dx,670+dy,241+dx,714+dy]]
      };
      function tildeCoded(dx,dy){
        return codeList(tildeRaw(dx,dy))
      };
      function tildeYmax(y){return 714+y};

      function ringHoleRaw(dx,dy){
        return [[
          [60+dx,652+dy],[60+dx,628+dy,78.5+dx,609.5+dy],[97+dx,591+dy,121+dx,591+dy],[146+dx,591+dy,164+dx,609.5+dy],[182+dx,628+dy,182+dx,652+dy],[182+dx,677+dy,164+dx,695+dy],[146+dx,713+dy,121+dx,713+dy],[97+dx,713+dy,78.5+dx,695+dy],[60+dx,677+dy,60+dx,652+dy]
        ]]
      };
      function ringHoleCoded(dx,dy){
        return [codeList(ringHoleRaw(dx,dy)[0])]
      };
      function ringRaw(dx,dy){
        return [[121+dx,549+dy],[80+dx,549+dy,49+dx,580+dy],[18+dx,611+dy,18+dx,652+dy],[18+dx,694+dy,49+dx,724.5+dy],[80+dx,755+dy,121+dx,755+dy],[163+dx,755+dy,193.5+dx,724.5+dy],[224+dx,694+dy,224+dx,652+dy],[224+dx,611+dy,193.5+dx,580+dy],[163+dx,549+dy,121+dx,549+dy]]
      };
      function ringCoded(dx,dy){
        return codeList(ringRaw(dx,dy))
      };
      function ringYmax(y){return 755+y};


      function dotlessiRaw(){
        return [[177,517],[177,0],[63,0],[63,517]]
      };
      function dotlessiCoded(){
        return codeList(dotlessiRaw())
      };
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  COMIC SANS MS  COMIC SANS MS  COMIC SANS MS
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["a"]        = {
        sC             : [
                           'HD@?? H1@??G??A, GUATG?At FbAAE??A& ES@??E"@?? C>@??BVA?? AtB??AtD?? AtFnB??G?? D8I=E??I= FpI=GYH?? H^HZH^G?? H^GtHJG_ H@G9H;Fe H5E??H4D?? H3C??HECK HOB??H??A?? H??A??H??Al H??A[ H??A4H??@?? Hi@??HD@??'
                         ],
        hC             : [
                           ['FzF( FzFRF??F?? F??G4F??Gm FkG??FPG?? F6G??F&G?? D??G??D!F?? C4E??C4Dy C4CXCmB?? D$B8D??B8 EuB8F5BZ FYBmF??C# FzE&FzF(']
                         ],
        xMin           : 24.5,
        xMax           : 494.5,
        yMin           : -32.5,
        yMax           : 509.5,
        wdth           : 511.5
      };
      font["??"]        = supplement(font.a,"acute",100,0);
      font["??"]        = supplement(font.a,"grave",130,-17);
      font["??"]        = supplement(font.a,"dieresis",-24,8);
      font["??"]        = supplement(font.a,"circumflex",-9,0);
      font["??"]        = supplement(font.a,"ring",-10,-10);
      font["??"]        = {
        sC             : [
                           'GUAw G,AOFfA1 E??@??Ea@?? C??@??B??A?? A??C-A??D?? A??FiC2G?? D^I1FDI1 G)I1H0H?? HPHxHVG?? H??HdIpH?? JKI>K,I> LII>M/H?? N3HFN3G8 N3FUMAE?? L??EdKwD?? H??Ci IoBEKGBE K??BELmBa MRB??MzC3 M??ChNACh NdChN??CN N??C4N??B?? N??A??MbAS LK@??KG@?? Ie@??H}A?? H??ApH??AA H??@??H:@?? G??@??GrA2 GeAAGUAw'
                         ],
        hC             : [
                           ['K,G?? I=G??HqD?? J??E?? L6FoL??G@ LDG??K,G??','GEGk F??G?? FoG??F5G?? D??G??D,F?? CBE??CBDx CBC}C??B?? DpB0EiB0 F*B0FbBI F??BcGEB?? G/C??G/D8 G/FJGEGk']
                         ],
        xMin           : 32.5,
        xMax           : 875,
        yMin           : -24,
        yMax           : 510,
        wdth           : 911.5
      };
      font["b"]        = {
        sC             : [
                           'E??@?? D}@??C??AS CdA#C6A# B??A#BxA> B^AXB^A?? B^A??B`BJ BcB}BcB?? BcC~B]EK BWF??BWG?? BWHIBXI?? BYKVBYK?? BYLYBrL?? B??MDCJMD C??MDC??Lp C??LbC??LG C??L,C??K?? C??JI C??HP DZH??E%I% EtICF6IC G??ICH??H! I??F??I??E. I??COHxB4 Gh@??E??@??'
                         ],
        hC             : [
                           ['F6G?? EgG??D??G^ DjGGC??F~ C??ET C??D; C??B?? D5B??D??Bf EFBRE??BR F??BRG{C6 HUC??HUE. HUF?G??F?? G<G??F6G??']
                         ],
        xMin           : 74.5,
        xMax           : 546,
        yMin           : -21,
        yMax           : 769,
        wdth           : 593
      };
      font["c"]        = {
        sC             : [
                           'E??@?? D:@??C5A~ B(B}B(DL B(E??C,Gf D>IPEwIP FVIPGLI" HbHjHbG?? HbGrHIGT H0G7G??G7 GqG7G[GH GFGYG2Gk FzG??EwG?? D??G??D1Fg CXECCXDL CXCKD0B?? D??B<E??B< F=B<F??B[ GrB?? G??C&G??C& H?C&HYB?? HuBnHuBH HuA??G^A? FZ@??E??@??'
                         ],
        xMin           : 51,
        xMax           : 473,
        yMin           : -31,
        yMax           : 519,
        wdth           : 513.5
      };
      font["??"]        = {
        sC             : [
                           'G1??? G1>??Fw>L F;=??EE=?? Ds=??D(>. CJ>WCJ>?? CJ?SC???S D0?SD]?; D???"E:?" Ek?#E???; E???QE???~ E??@,Eu@Q EP@wD??@?? CkA6B??B& B(B??B(DL B(E??C,Gf D>IPEwIP FVIPGLI" HbHjHbG?? HbGrHIGT H0G7G??G7 GqG7G[GH GFGYG2Gk FzG??EwG?? D??G??D1Fg CXECCXDL CXCKD0B?? D??B<E??B< F=B<F??B[ GrB?? G??C&G??C& H?C&HYB?? HuBnHuBH HuAeF{@?? F??@vG#@O G1@)G1???'
                         ],
        xMin           : 51,
        xMax           : 473,
        yMin           : -217.5,
        yMax           : 519,
        wdth           : 513.5
      };
      font["d"]        = {
        sC             : [
                           'IMG?? IAF??IAE?? IAC;I`A?? IbA??IbA?? IbAXIFA? I*A$H??A$ HJA$H-A~ GhAIF??A/ FP@??E??@?? D4@??C/A?? B%C$B%D~ B%F??C0G?? D:I<E??I< F??I<GFH?? H!HV H/KrHBL?? HOMVH??MV IuMVIuLx IuKqIMG??'
                         ],
        hC             : [
                           ['E??G?? DxG??D$G$ CSFDCSD?? CSC??D,C( D??BME??BM FPBMF??Bl G*B~GvC< G??CIG??C[ G??D?? G??Ev G??Fi GmG7G/G` FrG??E??G??']
                         ],
        xMin           : 50,
        xMax           : 537,
        yMin           : -22.5,
        yMax           : 778,
        wdth           : 587
      };
      font["e"]        = {
        sC             : [
                           'E??@?? D5@??C,A?? A??B~A??DY A??FWB??G?? C??I>ExI> F??I>G??H?? H??HDH??G8 H??FWG??E?? G_EdF@D?? CKCi C??B??DSBo E$BEE??BE FUBEG/B` H"B??HDC3 HfChH??Ch I-ChIHCN IdC4IdB?? IdB$H4AW F??@??E??@??'
                         ],
        hC             : [
                           ['ExG?? D??G??D1G2 CcFVC;D?? EgF+ F??F??GcG@ F??G??ExG??']
                         ],
        xMin           : 42,
        xMax           : 528.5,
        yMin           : -22.5,
        yMax           : 510,
        wdth           : 547.5
      };
      font["??"]        = supplement(font.e,"acute",100,0);
      font["??"]        = supplement(font.e,"grave",130,0);
      font["??"]        = supplement(font.e,"dieresis",24,0);
      font["??"]        = supplement(font.e,"circumflex",0,0);
      font["f"]        = {
        sC             : [
                           'GYK?? EnK??EQIV ENH?? FuI%G$I% H@I%H@HD H@G~GuGp GSGjG%Gl F{GmEEG^ E=E?? E=EBEADI EECPEEB?? EEA[E0@t D??@$DU@$ D-@$C??@? Cu@YCu@?? Cu@??Cw@?? C??A??C??C( C??E3 C??GN B??GDBnGD A??GDA??H" A??H??C6H?? C??H?? C??IBD!I?? D;KyD??L` EvM[GMM[ HXM[HXL} HXK??GYK??'
                         ],
        xMin           : 36.5,
        xMax           : 459,
        yMin           : -78.5,
        yMax           : 780.5,
        wdth           : 508
      };
      font["g"]        = {
        sC             : [
                           'HnDg HVA?? HQ@[H.?` G??>AG!=w F-<??DO<?? CM<??Bv=, A{=EA{=?? A{>jBO>j Bs>jCD>X C??>GD{>I F5>KF~??? G,@vG/Bm F{A??F1AZ EiA)D??A) CZA)BlB! A}B??A}D[ A}FcB??G?? D0I)F=I) F??I)GVH?? G??H|H3HL H??HIH??GX H??F??H??E?? HrD??HnDg'
                         ],
        hC             : [
                           ['F3G?? D{G??C??F?? C:E??C:Di C:C[CpB?? D$BLD??BL EtBLFPC; G#D!G/D?? GDEqG[GR G4GqF??G?? FaG??F3G??']
                         ],
        xMin           : 28,
        xMax           : 493,
        yMin           : -275.5,
        yMax           : 499.5,
        wdth           : 530.5
      };
      font["h"]        = {
        sC             : [
                           'H|@?? H5@??G??AO G??A??GxC3 GfD@GfD?? GfE5GiEi GkE??GkF5 GkGnF??Gn E??GnE1F~ D??FCD(D?? D(B-C??Aj CnA,C4A, B??A,BnAG BOAdBOA?? BOA??BXB5 BaBMBdCC BgDT BiJ! BpJ??BpKE BpKxBgL" B^LOB^L?? B^M(BzMC B??M_C>M_ C??M_C??L?? D,L)D,K^ D,JxD$I?? C??H??C??H1 C??G[ DrHGELH} F(I1F??I1 H0I1HnHH H??G??H??FN I%D?? I9CH IGBVIZA?? I_AoI_Ad I_A;IA@?? I#@??H|@??'
                         ],
        xMin           : 70.5,
        xMax           : 526,
        yMin           : -30.5,
        yMax           : 782,
        wdth           : 577.5
      };
      font["i"]        = {
        sC             : [
                           'D0D~ D0DBD3CN D7BYD7A?? D7AtC??AX C??A=CWA= C-A=B??AX BxAtBxA?? BxBYBuCN BqDBBqD~ BqEYB{Fc B??GlB??HG B??HtB??H?? C:I)CeI) C??I)D(H?? DCHtDCHG DCGlD9Fc D0EYD0D~',
                           'C??J?? CUJ??C3K7 B??KXB??K?? B??L6C3LW CULyC??Ly D3LyDTLW DwL6DwK?? DwKXDTK7 D3J??C??J??'
                         ],
        xMin           : 87,
        xMax           : 218,
        yMin           : -2.5,
        yMax           : 731,
        wdth           : 280
      };
      font["??"]        = {
        sC             : [
                           'D0D~ D0DBD3CN D7BYD7A?? D7AtC??AX C??A=CWA= C-A=B??AX BxAtBxA?? BxBYBuCN BqDBBqD~ BqEYB{Fc B??GlB??HG B??HtB??H?? C:I)CeI) C??I)D(H?? DCHtDCHG DCGlD9Fc D0EYD0D~'
                         ],
        xMin           : 87,
        xMax           : 218,
        yMin           : -2.5,
        yMax           : 730,
        wdth           : 280
      };
      font["??"]        = supplement(font["??"],"acute",-20,0);
      font["??"]        = supplement(font["??"],"grave",-20,0);
      font["??"]        = supplement(font["??"],"dieresis",-120,0);
      font["??"]        = supplement(font["??"],"circumflex",-60,0);
      font["j"]        = {
        sC             : [
                           'D???` D??@QDbD( D?HB D?HtD[H?? DxI?E!I? ECI?EeI& E??H??E??Hv F(DB FB?j FB>bEr=t D??<{C??<{ BI<{A<?> A0?XA0?n A0???AO@0 An@LA??@L BN@LB???M B???,CC>o Cj>=C??>= DF>=De>~ D}?.D???`',
                           'D??J?? D[J??D9K6 C??KWC??K?? C??L4D9LU D[LwD??Lw E8LwE[LU E~L4E~K?? E~KWE[K6 E8J??D??J??'
                         ],
        xMin           : -9,
        xMax           : 320,
        yMin           : -292,
        yMax           : 730,
        wdth           : 403
      };
      font["k"]        = {
        sC             : [
                           'Hx@?? HA@??H#AR GrB5F??C; E_E& E$D{D.D) D"B??D"A?? D"AVC??A; Cn@??CC@?? Bb@??BbB# BbBvBmC?? BxE8BxE?? BxF??B}H^ B??I??B??K. B??KZB}K?? BxLQBxL~ BxM)B??ME C-MaCWMa C??MaC??ME D7M)D7L~ D7LPD;K?? D@KVD@K) D9Hp D5GED7E?? E;F??F6G{ G??IW H-IzHSIz HzIzH??IZ I6I<I6H?? I6HtH??HS H!GFFsF$ HGC?? I]B7I]Az I]ARI>A6 H??@??Hx@??'
                         ],
        xMin           : 79.5,
        xMax           : 525,
        yMin           : -20.5,
        yMax           : 783,
        wdth           : 540
      };
      font["l"]        = {
        sC             : [
                           'DAGA D3C] D3B??D+Az C??@??CK@?? Bl@??BlA| BlBrBwD_ B??FKB??GA B??H[B??J! B??KjB??L?? B??MfCkMf DKMfDKL?? DKKjDFJ! DAH[DAGA'
                         ],
        xMin           : 84.5,
        xMax           : 196.5,
        yMin           : -21,
        yMax           : 785.5,
        wdth           : 273.5
      };
      font["m"]        = {
        sC             : [
                           'K??@q KQ@qKDAE K2B1J??Cu J??F" JwFgJ_G& J=G??I??G?? IsG??H??GA H1F??G??Fg G??E??G??E/ H6C* HIA??HIA+ HI@??H.@e G??@HGj@H G?@HG#@e F??@??F??A+ F??A??FrC?? FZEpFZFf FZGMF<G?? EyGhE2F?? D>E?? D/E??C??Ec C??E(C??D6 CxCCCxB?? CxBpC??B; C??A??C??Ao C??AFCmA+ CN@??C%@?? B8@??B8B?? B8CEBBD9 BME.BMEi BME??BDF?? B;GlB;G?? B;I~B??I~ CDI~CeI] C??I;C??H?? C??H??C??HZ C{H3C{G?? C}G8 D/G??D??Hv EuIJF9IJ GSIJG??H1 HBHzH??H?? IVI@J6I@ KYI@K??G?? K??GnL=E?? LXDVL??AN L??A&Lj@?? LK@qK??@q'
                         ],
        xMin           : 59,
        xMax           : 736.5,
        yMin           : -61,
        yMax           : 541.5,
        wdth           : 776.5
      };
      font["n"]        = {
        sC             : [
                           'H6@} Gc@}GXAX G<C. G/C??G/D?? G/D??G2Ea G5F!G5F= G5G??FhG?? E{G??D??F?? D<E??C??Dd C??D=C??C?? C|CSC|C$ C|B??C??BM C??A??C??Av C??AICmA. CQ@??C&@?? B}@??BcA. BGAIBGAv BGA??BABM B;B??B;C$ B;C??BIE< BWFoBWGS BWGsBSH/ BPHnBPH?? BPI6BmIQ B??ImC1Im C??ImC??Hn C??G| E:IUFhIU G??IUHAHL HlGqHpF< HpEZ HoD?? HoD.H??C- H??B-H??A^ H??A2H}@?? Ha@}H6@}'
                         ],
        xMin           : 60.5,
        xMax           : 491,
        yMin           : -35,
        yMax           : 533,
        wdth           : 523
      };
      font["??"]        = supplement(font.n,"tilde",-32,0);
      font["o"]        = {
        sC             : [
                           'E7@?? C??@??B??A?? A??B??A??Dl A??FHB??Gq C??I6E??I6 GBI6H&G?? HxFtHuE( HrCOG??B6 F??@??E7@??'
                         ],
        hC             : [
                           ['EsGq DcGrC??Fh CSEzCSDl CSC_C??B?? DbBME7BM E??BMFgB?? G9CjG>Dv GLGpEsGq']
                         ],
        xMin           : 40.5,
        xMax           : 473,
        yMin           : -29,
        yMax           : 506,
        wdth           : 525.5
      };
      font["??"]        = supplement(font.o,"circumflex",-32,0);
      font["??"]        = supplement(font.o,"grave",120,0);
      font["??"]        = supplement(font.o,"acute",90,0);
      font["??"]        = supplement(font.o,"dieresis",-40,0);
      font["p"]        = {
        sC             : [
                           'Ei@?? D??@??C??A? C??=m C??=ACv=$ CZ<??C0<?? B??<??Bl=$ BP=ABP=m BS@s BSCy BPENBDF?? B6HD B6H??BOI9 BmItC#It CJItCeIX C??I=C??H?? C??H??C|Hw CwHWCuH> DHHyD??H?? EeI1F,I1 GuI1HQG?? H??FtH??D?? H??C9H)B0 G0@??Ei@??'
                         ],
        hC             : [
                           ['F,Go ERGoD??GF DVG*C??F_ C??D??C??B?? D??BeEiBe FcBeG"C> GZC??GZD?? GZF=G/F?? F??GoF,Go']
                         ],
        xMin           : 58,
        xMax           : 492,
        yMin           : -284,
        yMax           : 536.5,
        wdth           : 534.5
      };
      font["q"]        = {
        sC             : [
                           'H9Cv G??@?? Gu?-Gu=?? Gu=YGY=> G?="F??=" F:="F4=?? F2>0F9>s FF?_ FYA6 E??@??Ec@?? C??@??B??A?? A}B??A}DU A}FtB??G?? DBIRF_IP F??IPG/I% GYIKG{IK G??IKH>I+ HZH??HZHe HZFDH9Cv'
                         ],
        hC             : [
                           ['E??H& DfG??C??Fq C?EwC?DQ C?C_C??B?? DSBEE]BI F8BLFdC. F??C??F??F! G"H& F??G??F_H# F)H*E??H&']
                         ],
        xMin           : 29,
        xMax           : 460,
        yMin           : -271.5,
        yMax           : 519,
        wdth           : 520
      };
      font["r"]        = {
        sC             : [
                           'HAF?? H:E??G`E?? F??E??F??F{ F??F??F??G> F??G?? ElG??D??G9 D8F{C??E{ C??Ad C??@??B??@?? BI@??BIAd BIF?? BIG0BLGr BNH1BNHR BNI4C#I4 C??I4C??G?? E@IGG$IG GuIGG??H?? HBHPHBGX HBG$HAF??'
                         ],
        xMin           : 67.5,
        xMax           : 448,
        yMin           : -33,
        yMax           : 514.5,
        wdth           : 480
      };
      font["s"]        = {
        sC             : [
                           'G]G1 G&G1F??GV F??GpFyH? F/H,D??G| CzG<CyFa C??FVD2FQ E??F)F??Ec G??D}G??C: G??A??F??AI F"@??Du@?? Cu@??B??A2 AkAjAkBJ AkBrA??B?? B&C,BNC, BmC,B??B~ C4BhC??BX DGBLDuBL EFBLE??Ba F`B}F`C: F`D>E%Dn D@D?? C>D??B??EF B9E~B9Fl B9H7CzH?? D4I)E5IM F5IsFnI?? F??I??GDI?? GoI??G??I?? H#IgH#I: H#H??H0Hh H<H0H<G?? H<GiG??GM G??G1G]G1'
                         ],
        xMin           : 20,
        xMax           : 445,
        yMin           : -29.5,
        yMax           : 557.5,
        wdth           : 486.5
      };
      font["t"]        = {
        sC             : [
                           'GWG?? GBG??G%G?? F??G??FwG?? F`G??ErGx E??C6 E??B?? E??BY E??@??D??@?? Dy@??D[@?? D>A6D>A] D>A??DABK DDB??DDC; D1Gv CjGyBXG?? A??G??A??Hg A??H??A??I- B6IJB`IJ D,I9 D,IlD&J> D"J??D"K7 D"KaD?K| D]K??D??K?? E^K??ElJ?? EoJcEoJ/ EmIx ElI: FeIJFwIJ G[IJG|I@ H6I,H6He H6H9G??G?? G??G??GWG??'
                         ],
        xMin           : 31.5,
        xMax           : 442,
        yMin           : -31.5,
        yMax           : 682,
        wdth           : 471
      };
      font["u"]        = {
        sC             : [
                           'HyHn HgE} HgE5HhD) HiB??HiBV HiB@HlA?? HpAjHpAS HpA)HS@?? H6@tG??@t GB@tG.AP F3@??D??@?? C??@??C@AI BeA??BRB?? B,D??B,FM B,GSBIH?? BWISC%IS CPISCmI8 C??H??C??Ht C??HFC{Gd CmF??CmFM CmE*CxD6 C??CAC??B| D8BjDWBa DwBWD??BW E??BWG)B?? G(DG G%E?? G%GXG8Ht GCIMG??IM HAIMH^I1 H{H??HyHn'
                         ],
        xMin           : 53,
        xMax           : 475,
        yMin           : -39.5,
        yMax           : 520.5,
        wdth           : 520
      };
      font["??"]        = supplement(font.u,"acute",90,0);
      font["??"]        = supplement(font.u,"grave",120,0);
      font["??"]        = supplement(font.u,"dieresis",-40,0);
      font["??"]        = supplement(font.u,"circumflex",0,0);
      font["v"]        = {
        sC             : [
                           'GTEA E??Au E??@??E3@?? Dl@??DKAo C6D| A??H; A??HUA??Hi A??H??A??I, B;IIBdII B??IIC7H?? E/Cd EyD??FhG( F??GwG:H?? GYICG??IC H8ICHVI& HvH??HvHd HvH>GTEA'
                         ],
        xMin           : 30,
        xMax           : 473.5,
        yMin           : -20,
        yMax           : 515.5,
        wdth           : 486
      };
      font["w"]        = {
        sC             : [
                           'KZH, J??EnI??B] IyA??I8A$ H??@rH[@s Gr@uG5B| G!COF??Da FnF9 E??D?? D??Al D}AFDdA3 DF@{C??@y C;@vBwB?? BSD3B0F5 A??GH A??G??A??H[ A??H??B)H?? BEI:BoI: C9I:CJHj CWH/C`GZ CnFK D&B?? D??EAE??HJ F(I6FyI6 GEI6GaH= G{GKG??E_ HGChHfB_ I,Dh J*H} J9I7J??I7 K&I7KFH?? KeH??KeHX KeHTKZH,'
                         ],
        xMin           : 37,
        xMax           : 657,
        yMin           : -40,
        yMax           : 508,
        wdth           : 684
      };
      font["x"]        = {
        sC             : [
                           'IKG?? H<F?? F??EU IMB5 IfA??IfAx IfAQIHA4 I*@??H??@?? Ha@??HBA; GiB"E??DM DGB?? C??BUB??Ai B??ADB]AD B7ADA??Ac A~A??A~B$ A~BCA??Bd B1B??BkC: C.CvCCC?? D??Ef C??F?? CFG??B??H? BiHaBiH?? BiI.B??IM B??IlCCIl C~IlDrHU E??Fl GYG?? HQH??H|IK H??IzIEIz IlIzI??I] J%I@J%H?? J%HfIKG??'
                         ],
        xMin           : 29.5,
        xMax           : 562,
        yMin           : -21.5,
        yMax           : 539.5,
        wdth           : 590
      };
      font["y"]        = {
        sC             : [
                           'H??H) FKBN EN@DD??>?? DK=R D2<??Ct<?? CJ<??C,=& B??=BB??=k B??>KDcA?? A??G@ AXG?? A>H4A>HS A>H|A]H?? A|I7A??I7 BNI7BhH?? C??G/EKC?? F]FV G*G??GsH?? G??I9HDI9 HmI9H??H?? I)H??I)HY I)HDH??H)'
                         ],
        xMin           : -2,
        xMax           : 499.5,
        yMin           : -283,
        yMax           : 507.5,
        wdth           : 520.5
      };
      font["z"]        = {
        sC             : [
                           'HpGX G??FpF??E) EtCBE*Bd E??BiF]Bi F??BiGNBY G??BJH?BJ HkBJH??B. H??A??H??Ai H??A<H??@?? Hk@??H?@?? G??@??GN@?? F??A!F]A! D??A!C;@{ C&@wB??@w B9@wB9AI B9A{BjB& DiC??F??Gv E??GnEXGn DGGnC/G?? BXG??BXHe BXH??BsI, B??IIC5II CfIIDEI> E%I2EXI2 E??I2F??I< H#IEHgIE I9IEI9H?? I9H1HpGX'
                         ],
        xMin           : 59.5,
        xMax           : 507.5,
        yMin           : -38,
        yMax           : 515.5,
        wdth           : 538
      };
      font["A"]        = {
        sC             : [
                           'J??A# J,A#IkB?? IQCdI*E> HGE1G%D?? E!DX DrCXC|Ac C]A+C%A+ B??A+BaAG BAAeBAA?? BAB=CUDs CDD??CDE- CDE}D#E?? D??GdF=It H$LfH^Lf I*LfIGKz I??I1 J??C?? KMBq KkA??KkA?? KkA^KLAA K-A#J??A#'
                         ],
        hC             : [
                           ['H~F?? H-I?? E??F> F??F]H~F??']
                         ],
        xMin           : 63.5,
        xMax           : 660,
        yMin           : -15,
        yMax           : 721.5,
        wdth           : 731
      };
      font["??"]        = supplement(font.A,"acute",200,200);
      font["??"]        = supplement(font.A,"grave",300,200);
      font["??"]        = supplement(font.A,"dieresis",160,200);
      font["??"]        = supplement(font.A,"circumflex",100,200);
      font["??"]        = supplement(font.A,"ring",180,180);
      font["??"]        = {
        sC             : [
                           'J%FR I?FOG??F? E??F& E>E3C??C/ C!A{ B??AMBTAM B-AMA??Ak AoA??AoB. AoBHA??Bg D1FVE??HY G??K+ IIL??JNM? JpMNJ??MN K;MNKXM2 LMMQM5Mb M??MrNzMr PzMrQuM8 R6L??R6LZ R6L1Q??K?? Q??KuQVKu QJKuQ8Ky O??L&NzL& N)L&MJK?? LmK??K??Km K??K.K??J?? K??I~KxG?? O!H: PXHNP??HN Q6HNQRH1 QoG??QoGi QoF??P??F?? O-Fr KkFG KbE<KbDQ KbBuK??BS K??B8L??B8 MVB8NPB; OIB>O??B> O??B>P?BD PgBJPzBJ QbBJQbAg Qb@??P??@?? P;@oO;@n Mg@o KJ@oJsAM I??B(I??DQ I??E@J%FR'
                         ],
        hC             : [
                           ['HwIi G<G{ I+G??J3G?? JDI??JDJ?? JDK"J?KI IfJxHwIi']
                         ],
        xMin           : 22,
        xMax           : 1082,
        yMin           : -42.5,
        yMax           : 791.5,
        wdth           : 1086.5
      };
      font["B"]        = {
        sC             : [
                           'H"Aj FG@??Cr@?? CG@??C!A: B}AcB}A?? B}D( B}E4B??G6 B??INC"JK C!K#C.LV C5L??CNL?? DSM@E}M@ G(M@HFLJ I~KDI~I~ I~G??H9Fs ILF3I??Eh J^D??J^DA J^CKI^B^ H??A??H"Aj'
                         ],
        hC             : [
                           ['FjEk E??E| EvE|E[Ez EAEyE4Ey D??EyDCE?? D=D??D=D$ D=B[ F=BeG_C" H"C=HbCv H??D(H??DA H??DpG??E) GBEUFjEk','E}Ky D??KyDgKs DeJG DQGM E]GAEfGB FzGNGWG?? H;HvH;I~ H;JZGUK) FoKyE}Ky']
                         ],
        xMin           : 93,
        xMax           : 589.5,
        yMin           : -23.5,
        yMax           : 767,
        wdth           : 630
      };
      font["C"]        = {
        sC             : [
                           'IyI?? I9I??H??JR H??J??HhJ?? HSK)G??K) FuK)EGIQ C^G.C^E) C^D+D.CP D??BsEwBs F[BsG@C% GzCCHoC?? I%DBIBDB ImDBI??D" J$C??J$C] J$C0I??B?? G??A*EwA* D,A*B??BE A??C]A??E) A??GuD/JP E??LsG??Ls H1LsHWLn H??LjH??L` I=L??IuL?? J7L??JIL8 JXKjJXJw JXJNJCJ/ J(I??IyI??'
                         ],
        xMin           : 43.5,
        xMax           : 587,
        yMin           : -12,
        yMax           : 743.5,
        wdth           : 602.5
      };
      font["??"]        = {
        sC             : [
                           'GG@7 GG>??F>>[ Ed>4D*>4 C+>4C+>?? C+?ICs?I C???ID)?H DN?FDb?F F4?FF4@7 F4@zEM@?? D0AX C$B)B`B?? A??C??A??E) A??GsD/JP E??LsG??Ls H0LsHWLn H??LjH??L` I=L??IuL?? J9L??JOK?? JXKoJXJw JXJIJ?J* J#I??IyI?? I:I??H??JR H~J??HdJ?? HQK)G??K) FuK)EGIQ C^G-C^E) C^D/D,CS D??BsEwBs FZBsGBC( GxCCH]C?? I(DBIBDB IkDBI??D" J$C??J$C] J$B??H??B- GzA[F??A@ GG@??GG@7'
                         ],
        xMin           : 43.5,
        xMax           : 587,
        yMin           : -199,
        yMax           : 743.5,
        wdth           : 602.5
      };
      font["D"]        = {
        sC             : [
                           'I]AH HE@bF*@b Ec@bD??@x C??@??CbA< CWA< C-A<B??AY BuAwBuA?? BuB??B~DS B??E??B??F?? B??GzB??I] B??K?B??L1 B??LYC&L?? CPM1CzM1 C??M1D??Lq F,L%FCK?? HXK@I??I} K??G??K??E?? K??DXK3C> JeB$I]AH'
                         ],
        hC             : [
                           ['G??IR G,I??DCK2 DHH?? DKF?? D;Bl DBBiDPB` E%B$F)B$ G??B$HnBj ILC*I??C?? J<D??J<E{ J<G??G??IR']
                         ],
        xMin           : 89,
        xMax           : 671.5,
        yMin           : -48.5,
        yMax           : 759.5,
        wdth           : 721.5
      };
      font["E"]        = {
        sC             : [
                           'I??Ke IvKeIeKj H?K??G%K?? FVK??ExK?? D??K{D+K] D4J??D4Jx D4IpD"G?? GOH+ H??H>I6H> IbH>I??H" I??G??I??GY I??F??IBFw GYFb C??F8 C??EtC??E5 C??DxC??DA C??BjD-BC DDB(EFB( E??B(F}B+ GwB/H3B/ HGB/HnB5 H??B<I%B< I??B<I??AV I??@??I:@t H_@bF-@b C??@bC(A1 BJA??BJDA BJD??BMEJ BPE??BUFk BJF??BJF?? BJG;B^GV BqIqBqJx BqJ??BhKb B^L%B^LJ B^M?C>M? ChM?C??M! D{MBEcMQ FJMbG%Mb H??MbI??M( JcL??JcLJ JcL"JIK?? J,KeI??Ke'
                         ],
        xMin           : 68,
        xMax           : 592,
        yMin           : -48.5,
        yMax           : 783.5,
        wdth           : 624.5
      };
      font["??"]        = supplement(font.E,"acute",100,240);
      font["??"]        = supplement(font.E,"grave",200,240);
      font["??"]        = supplement(font.E,"circumflex",40,240);
      font["??"]        = supplement(font.E,"dieresis",80,240);
      font["F"]        = {
        sC             : [
                           'I{KE IiKEITKM H[KzF??Kz FTKzE~Kq E&KhD;KS D9H- EwH`FUH` GlH`H??HN IiHDIiGk IiG>ILF?? I/F??H??F?? HSF??GnF?? F??F??FUF?? E??F??D6F^ D-A> D-@??C??@x Cw@ZCL@Z C!@ZB??@x Bk@??BkA> BkB??BsE?? BzH??BzJA BzJmByKB BwK??BwLD BwLpB??L?? C,M)CWM) CxM)C??L?? D??M-EkM7 FKMBF??MB G??MBH??L?? JYLuJYL, JYK??J@Kh J#KEI{KE'
                         ],
        xMin           : 84,
        xMax           : 587.5,
        yMin           : -52,
        yMax           : 768,
        wdth           : 606.5
      };
      font["G"]        = {
        sC             : [
                           'K7E?? J{CfI9B1 Gx@??Ep@?? C??@??B??A?? A??B??A??D?? A??F??B??H?? C??K,E9LQ F6M@GBM@ G??M@I,L?? J_L?J_Kk J_KBJAK" J#J??I|J?? IfJ??I>J?? H)KxGBKx FzKxF)K* E??J??E5I?? CTGvCTD?? CTCaC??B?? DJBFEpBF F??BFG??C5 I&D*I]E?? GNEwE??D?? EwD??EaD?? E5D??D??E2 D??EPD??Ey D??F.E3FN F??GOJ??GO K4GOKPG2 KnF??KnFl KnF,K7E??'
                         ],
        xMin           : 38.5,
        xMax           : 661.5,
        yMin           : -34,
        yMax           : 767,
        wdth           : 679.5
      };
      font["H"]        = {
        sC             : [
                           'LOK?? LAKyLAK) LAJ??LCJR LEI??LEI} LEH??L4GY L!E??L!E5 L!DlL-CW L8BBL8Ax L8AOK??A4 K??@??KZ@?? K3@??J??A4 J}AOJ}Ax J}BBJsCW JhDlJhE5 JhE~JmFF IEFCGOE?? D5ED D5DmD"CK C??B)C??AP C??A(Cx@?? C]@qC4@q B??@qBr@?? BVA(BVAP BVB8BhC?? ByESByF: ByFqBuG] BqHIBqH?? BqIMB{Jh B??K??B??LO B??LyB??L?? C:M/CcM/ C??M/D#L?? D?LyD?LO D?K??D5Jf D+IJD+H} D1F?? GTGT IOG??J{G?? J??H??J??K) J??KuJ??L@ K>M(KyM( K??M(L;L?? LXLtLXLJ LXL;LOK??'
                         ],
        xMin           : 74,
        xMax           : 715,
        yMin           : -41,
        yMax           : 758.5,
        wdth           : 768
      };
      font["I"]        = {
        sC             : [
                           'HiJ?? H*J??GKJ?? F.K" E??H??E??F?? E??F@E??E] E??DxE??D3 E??CWE??B?? HLB?? HvB??H??Bt I,BVI,B, I,A??H??Ae HvAGHLAG G??AGG(AE F:ABE??AB ECABDCA0 CB@??B??@?? BX@??B<A; A??AXA??A?? A??B,B<BI BXBhB??Bh C@BhDSB| D^CJD^D0 D^DtDVET DPF5DPFy DPHYDlK+ CmK& BnK# BCK#B&KA A??K^A??K?? A??LeBhLn C6LuD??Lu FQLuHwLJ IML>IMKc IMK4I+J?? H??J??HiJ??'
                         ],
        xMin           : 36.5,
        xMax           : 517.5,
        yMin           : -18,
        yMax           : 729,
        wdth           : 546
      };
      font["J"]        = {
        sC             : [
                           'JRK1 JAK1I??K8 ImK@ITK@ I$K@HeK= HjJI HjDsG??B& GH@LF&@L D~@LCVAG A??BPA??C?? A??DzB??Dz CdDzCdC?? CdC2DVBc EDA??F&A?? FxA??F??E?? G$GjG$JI G$JeF??K2 FeK1 F>K1EsK4 E$K6D??K6 DSK6D6KQ C??KnC??K?? C??L??D??L?? EAL??E??L~ FDL{FeL{ G!L{G??L?? H??L??ITL?? K3L??K3K?? K3KrJ??KR J}K1JRK1'
                         ],
        xMin           : 45.5,
        xMax           : 632.5,
        yMin           : -59,
        yMax           : 739.5,
        wdth           : 665
      };
      font["K"]        = {
        sC             : [
                           'J&@?? H??@??F??B?? D^ED D^E6 D]A7 D]@VC??@V CO@VC.@?? B??A/B??A_ B??CBB??F?? C.JPC.L4 C.L_CJL| CfL??C??L?? D8L??DTL| DqL_DqL4 DqKUDeI?? DYHLDZGf E^HbF??I?? H??Lc I;L??IeL?? I??L??J)Ll JHLMJHL" JHKdHLIL F??G??EeFW FZE]HTCv I:B?? IsBuJ2B` J??BEJ??A?? J??A^JlA? JQ@??J&@??'
                         ],
        xMin           : 104,
        xMax           : 606.5,
        yMin           : -54,
        yMax           : 747.5,
        wdth           : 610.5
      };
      font["L"]        = {
        sC             : [
                           'I*Ak H<A6FP@?? Dw@hCm@h B??@hB`@?? B#A.B#A?? B8D` BQG??BQL? BQLjBnL?? B??M"C2M" C]M"CyL?? C??LjC??L? C??G??CzDS CmC> CfBnCgB/ EfB,HlC& H}C,H??C, I4C,IQB?? IjBmIjBE IjA??I*Ak'
                         ],
        xMin           : 49,
        xMax           : 531.5,
        yMin           : -45.5,
        yMax           : 752.5,
        wdth           : 550.5
      };
      font["M"]        = {
        sC             : [
                           'Mu@q M@@qL??A& L??AVLjBC LFCl K??D??KGH?? I??DP IJB?? I&B(H??Ac HW@??G??@?? GY@??G7AV G!A??F??B> FuC+ E??E??EFH?? E"G_ D$C[ C??B??CuAN CW@??B??@?? Be@??BGA# B/ABB/Am B/B??BsD~ C_G?? C??J: DAK??DrLT D??L??ERL?? E??L??F1LE FWKoF??Ic G6F??H#D+ I4G"I??J: J;KI JMK??JjLS J??L??KQL?? L$L??LQKz LbKBLxI?? M1FZM??C?? N7Bz N]AsN]AS N]A)N<@?? M??@qMu@q'
                         ],
        xMin           : 54.5,
        xMax           : 845,
        yMin           : -41,
        yMax           : 749,
        wdth           : 882.5
      };
      font["N"]        = {
        sC             : [
                           'M!B?? M!BlL??A?? L??@??L*@?? Kv@??K*Ac G??DZC??I?? C??HA C??Fc C??E??C??Dp C??CMC??B| C??@uC4@u B??@uB`@?? BBA5BBA` BBA??BIB[ BOC.BOCW BOC??BSD?? BWE??BWFA BWF??BTG?? BQH??BQIG BQI??BEJ?? B:KxB:L5 B:LcBaL?? B??M,C8M, ClM,D8L; F+IOGnG^ ITE?KjC; KmCfKjD7 KgE2 KgH_KEJ] KAJwK*KC J??K??J??L* J??L??K??L?? M(L??M(H! M(G5M$E_ M!C??M!B??'
                         ],
        xMin           : 60,
        xMax           : 755,
        yMin           : -39,
        yMax           : 757,
        wdth           : 796.5
      };
      font["??"]        = supplement(font.N,"tilde",160,160);
      font["O"]        = {
        sC             : [
                           'GQ@?? E=@??C??B+ B3C[B3Eq B3HBC|JV E[L??H)L?? JkL??K??Ky M)JcM)G?? M)ELKsC< I??@??GQ@??'
                         ],
        hC             : [
                           ['H)KA F9KAD??IS C{GyC{Eq C{D4D??C= E??BNGQBN I>BNJXD= KcE??KcG?? KcI??J{Jg I??KAH)KA']
                         ],
        xMin           : 56.5,
        xMax           : 755.5,
        yMin           : -30,
        yMax           : 739.5,
        wdth           : 798
      };
      font["P"]        = {
        sC             : [
                           'DUE?? D9E??C_E?? CVDyCVA?? CVAaC<AE C"A*B~A* BVA*B=AE B"AaB"A?? B"D% B"E5B5G: BHITBJJO BJKU BJL6BVLc BmM8C6M, CUM6C??M; DHM@D??M@ FOM@GlLF H??K?H??I?? H??G??G`F?? F;E??DUE??'
                         ],
        hC             : [
                           ['D??K?? D[K??D9K?? C??K??C??K?? C??JK CjGF DUG9 EzG9FjG?? GeHhGeI?? GeJpFpK> E??K??D??K??']
                         ],
        xMin           : 48.5,
        xMax           : 490.5,
        yMin           : -12,
        yMax           : 767,
        wdth           : 520.5
      };
      font["Q"]        = {
        sC             : [
                           'M??=?? M_=??K???= J8@?? H??@PGr@P EK@PCmB; A??D$A??FM A??I)C??J?? E??L??HjL?? KVL??L??Jy N3H??N3E?? N3CVKxAz MK@5 NI?I No?%No>~ No>UNQ>6 N3=??M??=??'
                         ],
        hC             : [
                           ['HjK? F^K?D??I?? CUHUCUFM CUDxD{CJ E??A??GrA?? H4A??H}B+ G?COG?D. G?DYG`Dv G??D??H%D?? HUD??HzDc IYCfJSB?? LkD"LkE?? LkH;KuIq JnK?HjK?']
                         ],
        xMin           : 37.5,
        xMax           : 854,
        yMin           : -214,
        yMax           : 739.5,
        wdth           : 876
      };
      font["R"]        = {
        sC             : [
                           'I??A7 IiA7IHAV F??C??CzD?? C??CD C??A?? C??AYCkA< CN@??C#@?? B{@??B_A< BBAYBBA?? BBBQB;Ck B4D??B4EP B4F*BGG[ B[H??B[Ig B[I??BRJ{ BHK[BHK?? BHLEBiLp B??M!CNL?? E9L?? F?L{F??LJ J%JyJ%HI J%G4H??FB H3EgF??E6 IAC??JWB` JrB?JrA?? JrAtJSAU J5A7I??A7'
                         ],
        hC             : [
                           ['D??KB C??KM C??JW C??I??C??Ib C??H??C??G?? C??F] C??F]D(F] DEF[DTF[ FMF[GIF?? G??G;H.Gm HcH"HcHI HcIQGHJF F:K1D??KB']
                         ],
        xMin           : 57,
        xMax           : 599.5,
        yMin           : -17.5,
        yMax           : 749.5,
        wdth           : 628
      };
      font["S"]        = {
        sC             : [
                           'BDC5 BCC_BaCy B~C??C&C?? CWC??C|C[ D-B??DTBw E&B?FEB? G]B?H_B?? I??CUI??Dk I??EfHzF- G??FkFUFp E:FvDNG2 CCG??CCH?? CCJCD??KR FELZG??LZ HnLZIeL: J??K??J??KN J??JzJ*Jz I??JzI!J?? H@K"G??K! FsJ??E??JV D??I??D??H?? D??HOF+H- FaG??G|G?? IZG??JXF?? KLE??KLDv KLB??IvA?? H:@??FD@?? D??@??C~AN BGB!BDC5'
                         ],
        xMin           : 65,
        xMax           : 645,
        yMin           : -28,
        yMax           : 716,
        wdth           : 693
      };
      font["T"]        = {
        sC             : [
                           'KuJ?? K+J??I??J?? H??K)H6K( GrK( GuJ!G??Gt G??EYG??D< G??C??H(CU H.B??H.Bm H.B*G??A{ G??A:GDA: F??A:F??AU F_AqF_A?? F_B*FdBG FiBfFiBt FiC"FcC?? F]DcF]D?? F]E??FEG?? F.J-F+K# ERK" C}K"B??KC B3KWB3L" B3LKBLLk BjL??B??L?? C:L??D4Lx D??LmERLm E??LmF??Lo G|LrH5Lr H??LrI??Lg K(L[KuL[ K??L[L:L> LVK??LVKx LVKML:K0 K??J??KuJ??'
                         ],
        xMin           : 56.5,
        xMax           : 714,
        yMin           : -4,
        yMax           : 739.5,
        wdth           : 679.5
      };
      font["U"]        = {
        sC             : [
                           'GE@?? D??@??C??BI B??CVBiEj BYFfBYIX BYJbB`K5 BfK??BqL1 B??LyCHLy D!LyD!KS D!F?? D!BFG@BF JFBFJFJ* JFJPJFJ?? JEKEJEKX JEK??JZLC JwL~K+L~ K??L~K??Kx K??KOK??J?? K??J-K??I?? K??@??GE@??'
                         ],
        xMin           : 75.5,
        xMax           : 678,
        yMin           : -20,
        yMax           : 733.5,
        wdth           : 736.5
      };
      font["V"]        = {
        sC             : [
                           'K=K} J??K!JZJ> I??Hi G??C! G[B$F??A. F??@tFF@t E|@tE^A@ DgCiCVG?? B??J" BOKoBOL, BOLXBoLu B??L??C3L?? C~L??C??L? D7J?? D??HI EsE_FKCW FQCg HVI+ I)J?? IbL+I??Lv J@L??JmL?? J??L??K2L?? KPLbKPL7 KPK??K=K}'
                         ],
        xMin           : 70.5,
        xMax           : 647,
        yMin           : -39.5,
        yMax           : 749.5,
        wdth           : 649.5
      };
      font["W"]        = {
        sC             : [
                           'L/@e K??@eKa@~ K9@??K9AE J??B<J??B?? JvCPJ3F+ I??H1IrIQ H??F??H6E/ GCC,F??A?? G-A??G-An G-ABF??A$ Fc@??F5@?? E2@??E2A?? D??B~ D)F] CjHNBPK?? BIL&BIL9 BIL??C0L?? CpL??C??LN D"L+DYJ?? D??ISELGZ F+D+ F??E??G|Hz H:JMH[J?? I3LwI??Lw JKLwJhL1 J??K^K.H?? KBG??KrE?? LEB?? MGE[N??It N??I??O=K+ OYK??O??L^ P$L??P_L?? Q@L??Q@L1 Q@K??P??KO P{Jg PDI8 N!Cx M{B??L??A$ Lv@eL/@e'
                         ],
        xMin           : 67.5,
        xMax           : 1023,
        yMin           : -47,
        yMax           : 745,
        wdth           : 1039.5
      };
      font["X"]        = {
        sC             : [
                           'K??Kh J??JIJ;Ic IAH. H{GIH;F?? I??DI J??B??KwA?? K??AyK??AU K??A,Ks@?? KT@pK+@p J??@pJg@?? I??ARIPBG HMC?? G3Em DdBi C0@?? B??@??Bi@?? B@@??B!@?? A??A;A??Ae A??A??A??B% CMCk F;F?? EPH"DWI3 CfJM B??K(BhKY B>K|B>L( B>LPBZLq BwL??B??L?? CtL??DuK_ D??K"EoJ5 F^I0GBH+ H??Jb J{L??K:L?? KcL??K??Lr K??LRK??L) K??K??K??Kh'
                         ],
        xMin           : 33,
        xMax           : 686.5,
        yMin           : -41.5,
        yMax           : 742.5,
        wdth           : 723.5
      };
      font["Y"]        = {
        sC             : [
                           'J:K" J"J~I}J0 HTF?? GsE(F??Cz F!A?? EoA6 EN@~D??@~ Dr@~DR@?? D3A6D3Aa D3A??D??C0 E??D?? DXFnD#Gp CyH^B??Iy A??KKAmKx A_K??A_L+ A_LUA~Ls A??L??BBL?? BsL??B??Lb CbKi DHJODjI?? E3H??E]H8 E}GhFfF[ HEJ| HlK?I.LK IJL??I??L?? J0L??JOLt JoLWJoL, JoK??J:K"'
                         ],
        xMin           : 14,
        xMax           : 598,
        yMin           : -34.5,
        yMax           : 742.5,
        wdth           : 635
      };
      font["Z"]        = {
        sC             : [
                           'J??J?? I??J- HaI#F??Fv D)B?? C??B^CzB> FvBL HoBXIsBX JtBXK0BL K??B=K??A} K??ALKdA0 KF@??J??@?? J~@??JE@?? I??@??Iq@?? H[@??F2@?? C??@??Bu@?? A??@??A??As A??B3B@B?? C)D% E??G?? GdJ0H??KO FIK< C>K< C4K<B??K: B??K9B??K9 A??K9A??K?? A??LaBMLv BnL??C8L?? C|L??D??Lv E??LhFILh F??LhH*Lr I@L{I??L{ K??L{K??K?? K??K[J??J??'
                         ],
        xMin           : 33,
        xMax           : 674.5,
        yMin           : -25,
        yMax           : 736.5,
        wdth           : 693
      };
      font["0"]        = {
        sC             : [
                           'E??@?? Cn@??BfC+ A~D}A~GK A~IgB??K9 D"M0F4M0 H5M0IEKU JAI??JAG?? JADRI6Bx H,@??E??@??'
                         ],
        hC             : [
                           ['F3Ku D??KuC??J; C;H??C;GZ C;D??C??Cy DiBWE??BW GfBWH?DC H??EhH??Gd H??ImH+Jq GYKuF3Ku']
                         ],
        xMin           : 29.5,
        xMax           : 575.5,
        yMin           : -19.5,
        yMax           : 759,
        wdth           : 610
      };
      font["1"]        = {
        sC             : [
                           'FrAA E/AA CnAB C)ABB??AJ B]A]B]A?? B]BxCvBx D#Bw DLBu DLC"DDC?? D;D[D;D?? D;E??DRG?? DhI|DgJ| CeI??C?I?? B??I??B}J3 B`JPB`Jx B`K#C3Kg ChK??DHL^ D??M4EmM4 F.M4F.Lj F.LRF(L% F!KzF!Kd F!KCF$J?? F)J@F)I?? F)I0E??GT E{ExE{D?? E{DPE??C?? E??C.E??B{ FrB} F??B}G5Bb GPBFGPA?? GPAvG5A[ F??AAFrAA'
                         ],
        xMin           : 77,
        xMax           : 391,
        yMin           : -0.5,
        yMax           : 761,
        wdth           : 450
      };
      font["2"]        = {
        sC             : [
                           'H??A@ H??A@HUAO H)A_G??A_ G`A_F}AX E??AREfAR E?ARDvAH D*A?C??A? CzA?CfAB CPAFCEAF B??AFBnA?? BcB*BcB~ BcDbC_El C??F+E??GV F??H5GJHl G??IIG??JG G??J??GMK6 F??KcFAKc EhKcD??K. C??JA CbI??CGI?? BdI??BdJq BdJ??B??K? C{L*DNLZ EDL??FAL?? G`L??H[LH IgKhIgJP IgImIJH?? I-HDHuG?? H+G&F}F: EDEGD??D?? C??C??C??B| EjB?? G8B??G??B?? H[B??H??B?? IwB_IwA?? IwA|I[A^ IAA@H??A@'
                         ],
        xMin           : 80,
        xMax           : 538,
        yMin           : -1.5,
        yMax           : 749.5,
        wdth           : 610
      };
      font["3"]        = {
        sC             : [
                           'E??@?? D~@??C??AR B??A??BVB?? BPC,BPC< BPCeBoC~ B??C??C3C?? CZC??CwCt D"C0 DFB??D??Bi E=BPE??BP F|BPGKB?? G??CYG??D> G??ERG3F* FTFwE5F?? DIF??DIG_ DIG??D??H6 F??Hq GKH??GnI2 G??I[G??I?? G??JnGNK! F??KXE??KX ECKXD??K8 C??Jt CwJ_CdJ_ C;J_B??J} B??J??B??K@ B??K??C??LT D??L??EpL?? GAL??H<L7 I@KSI@I?? I@H5G??Gm GwGfGaG_ HcG/I"FO IdEqIdDc IdB??H[A?? GT@??E??@??'
                         ],
        xMin           : 71,
        xMax           : 528.5,
        yMin           : -22.5,
        yMax           : 745,
        wdth           : 610
      };
      font["4"]        = {
        sC             : [
                           'HpDm HpA?? HpA(G??A( G/A(G/B6 G/BGG0Bi G2B??G2B?? G1Dr C??D} B~D}BID?? AqD??AqEJ AqEwB%F9 B{F?? F[LZ F??M5G??M5 HpM5HpLU HpF* H??F+H??F+ JKF+JKEJ JKD??I??Dr I`DiHpDm'
                         ],
        hC             : [
                           ['G1F. G1K% E-G??C??F7 G1F.']
                         ],
        xMin           : 23,
        xMax           : 580.5,
        yMin           : -13,
        yMax           : 761.5,
        wdth           : 610
      };
      font["5"]        = {
        sC             : [
                           'Eg@?? CQ@??BNBQ B=BnB=B?? B=C.B[CJ BzCfB??Cf CGCfClC; C??B}D9Bk DzB?EgB? F??B?G??C@ HjD;HjEi HjFxH:GP G??H@F??H@ E??H@EUH# D??G??DkGW C??Fc CUF6C(F6 B??F6BgFR BJFoBJF?? BJG)BZHC B|JxB|KW B|KzBkL! BYLJBYL_ BYL??C?L?? CSL??C{L?? D!L??D6L?? DoL??E`L?? FQL??F??L?? G#L??GYL?? G??L??H*L?? H<L??H`L?? H??M$H??M$ I:M$IWL?? IvLnIvLH IvKZG??KZ GpKZGAK] F??K_F??K_ EeK[ D?KV D?K*C??H?? D??I}F??I} HVI}IHHT J&GEJ&Ei J&CbH??B6 Gn@??Eg@??'
                         ],
        xMin           : 61.5,
        xMax           : 562.5,
        yMin           : -31,
        yMax           : 753.5,
        wdth           : 610
      };
      font["6"]        = {
        sC             : [
                           'E??@| C??@|B??B6 B.COB.EO B.I1E5K?? E??Lr FUM1FxM1 F??M1G;L?? GYLzGYLS G[L0FwKL E/I?? DaI9D&G?? D}H>E;HQ E|HeF#He G??HeH??Gk I~FqI~D?? I~C(HzA?? Gp@|E??@|'
                         ],
        hC             : [
                           ['E??F?? E5F??DsF?? DYFuCsF4 CmE??CmEO CmC??D&C2 DrB$E??B$ G!B$GtB?? H>CqH>D?? H>E??GrFZ G#F??E??F??']
                         ],
        xMin           : 54,
        xMax           : 541.5,
        yMin           : -35.5,
        yMax           : 759.5,
        wdth           : 610
      };
      font["7"]        = {
        sC             : [
                           'J(K= IPJU HQIAGgGo F4Di F!D=EcB?? E0AwD??A/ Di@??D6@?? C??@??Cr@?? CSA8CSA_ CSA??C??B?? EnG6 F??IwG??K" H+K7 D@KA BfKG A??KOA??L# A??LMA??Li B=L??BgL?? CbL??EWL{ GNLtHILt I}Lt JdLtJdL5 JdK??J(K='
                         ],
        xMin           : 34,
        xMax           : 592.5,
        yMin           : -32.5,
        yMax           : 736,
        wdth           : 610
      };
      font["8"]        = {
        sC             : [
                           'E??@?? DK@??CLAh B<BLB9C?? B5FLC??G> BiH(BiIk BiK"CoK?? DoL??F$L?? I?L??I?I?? I?H??H??HJ HkG??G~G^ H??F??IIF? I??E]I??D- I??BgH{Au Gr@??E??@??'
                         ],
        hC             : [
                           ['E??F| DvF2DAE?? CqE-CvC?? CzB??DfBd E5B8E??B8 GEB8G??B?? H@CIH@DL H@ELG]E?? F??FPE??F|','F!Kf E#KfDcJ?? D%J[D&Ik D(HbE??H( F~HJG/Hm G??I"G??I?? G??J??GEK9 F??KfF!Kf']
                         ],
        xMin           : 59.5,
        xMax           : 549.5,
        yMin           : -26.5,
        yMax           : 745,
        wdth           : 610
      };
      font["9"]        = {
        sC             : [
                           'G?B8 FyA??E[A9 D,@fCh@f C?@fC%@?? B??@??B??AF B??A??CNA?? DrBU E??B??FaCd G8D3G??EF H+E?? GuE|F??Ea FHEFE??EF DZEFCSF- B/G*B/H?? B/J??CWL) DgL??FPL?? G??L??H??K?? J(JqJ)H?? J*F??INE3 HkC7G?B8'
                         ],
        hC             : [
                           ['F4Kx D??KxD>K! ClJMCkI! CkG??DOGC E(F??F/F?? F~F??GRG- GzGBH_G?? HlHcHlH?? HkI??G??J?? F??KxF4Kx']
                         ],
        xMin           : 54.5,
        xMax           : 563.5,
        yMin           : -46.5,
        yMax           : 749.5,
        wdth           : 610
      };
      font["??"]        = {
        sC             : [
                           'B7L?? B7M-BSMG BoMbB??Mb C9MbCbM. C??L??C??LV C??L3CkK?? CNK??C+K?? B??K??B^L3 B7LdB7L??',
                           'B9AX B9I?? B9JoB??Jo CgJoCgI?? CgIpCiH?? CkHPCkH) CkF??CiD?? CgBgCgAX Cg@??B??@?? B9@??B9AX'
                         ],
        xMin           : 58.5,
        xMax           : 162,
        yMin           : -32.5,
        yMax           : 783.5,
        wdth           : 237.5
      };
      font["!"]        = {
        sC             : [
                           'C??AX C??A5Ck@?? CN@??C+@?? B??@??B^A4 B7AeB7A?? B7B/BSBH BoBcB??Bc C9BcCbB/ C??A??C??AX',
                           'C??L?? C??DK C??CuC.Cu BWCuBWDK BWDtBTEC BRE??BRF9 BRGGBTIc BWK}BWL?? BWMbC.Mb C??MbC??L??'
                         ],
        xMin           : 58.5,
        xMax           : 162,
        yMin           : -32.5,
        yMax           : 783.5,
        wdth           : 237.5
      };
      font["|"]        = {
        sC             : [
                           'DuNL EHNLEHMv EH?R EF>aDt>a D9>aD$?* C???QC??AZ C??Mv C??M??D4N4 DMNLDuNL'
                         ],
        xMin           : 172,
        xMax           : 259,
        yMin           : -177,
        yMax           : 837,
        wdth           : 421
      };
      font['"']        = {
        sC             : [
                           'FaLv FaLgF^LJ F[L-F[K?? FRI# FPHLE|HL EVHLE<He E"H~E#I! E-L$ E/LtE9L?? ENMLE??ML F0MLFHM3 FaL??FaLv',
                           'CbI?? CbItCfIS CkI3CkI# CkH??CPHi C6HPB??HP B3HPB3Ix B3J7B6K8 B9L9B9Lz B9L??BQM8 BjMPB??MP C6MPCNM8 CgL??CgLz CgL;CeK> CbJBCbI??'
                         ],
        xMin           : 56.5,
        xMax           : 335,
        yMin           : 453,
        yMax           : 775,
        wdth           : 424
      };
      font["'"]        = {
        sC             : [
                           'D??LF D??L(D??Kp D??K5D??J?? D??I??D7I?? C{I??CjJF CcJ]CcK" CcK>C]Ku CWL*CWLF CWM&C`MI CsM??D5M?? DZM??DtM?? D??MhD??MB D??M-D??L?? D??LZD??LF'
                         ],
        xMin           : 138.5,
        xMax           : 230,
        yMin           : 556.5,
        yMax           : 810.5,
        wdth           : 388
      };
      font["#"]        = {
        sC             : [
                           'BFEv D%Ev D??H?? B??H?? B<H??B<Im B<J6CLJ6 ENJ6 EhK&E??Ll F7MEF??ME G.MEGCM+ GXL??GXLs GXLJG>Kr F??JUF??J6 JgJ6 J??K,KALs KZMEK??ME LtMELtLy LtL6K??J6 MaJ6 NDJ6NDIn NDH??MUH?? MGH??M(H?? L??H??L{H?? KmH?? J??Ev LKEv L??EvM0Ek MdEWMdD?? MdDBL??DB JSDB I}A?? IbA%H??A% H>A%H>At H>B-H_B?? H??D5H??DB E%DB D??CPD?As D"A-CaA- B??A-B??A{ B??A??C(Bi CJCVCmDB B2DB AbDBAbE" AbEIA??Ea A??EvBFEv'
                         ],
        hC             : [
                           ['FWH?? E^Ev IEEv J3H?? FWH??']
                         ],
        xMin           : 15.5,
        xMax           : 833,
        yMin           : -14,
        yMax           : 769.5,
        wdth           : 842.5
      };
      font["$"]        = {
        sC             : [
                           'G.M?? G.LZ G1LZ G??LZH??L: J$K??J$KN J$JzINJz I&JzHDJ?? GcK"G.K! G.G?? H??G??I??F?? JpE??JpDv JpC1IhB0 HpA?G.@?? G.>?? G.>rF??>X F}>?FV>? E??>?E??>?? E??@?? B"@??B"B?? B"C^BuC^ C!C^CLC9 C??B??D+Bs DzBKE??BE E??Fp EyFp DbFvCsG9 BjG??BjI" BjJ(CgJ?? DZK??E??L> E??Mz E??M??E??N9 F3NRFZNR G.NRG.M??'
                         ],
        hC             : [
                           ['G.FV G.BZ G??B~HZCA I(C??I(Dk I(E??G.FV','E??H# E??J?? D=J9D=H?? D=HAE??H#']
                         ],
        xMin           : 48.5,
        xMax           : 598.5,
        yMin           : -193.5,
        yMax           : 840,
        wdth           : 693
      };
      font["%"]        = {
        sC             : [
                           'J??A/ I??A/I3A?? HWBQHWCV HWDgI)EE I??F+J??F+ K??F+LwEa MfD??MfC?? MfBwL??A?? L$A/J??A/',
                           'JxL[ JRK??J)K@ IeJ! H"F?? FHC6 F*BkEfAX EJA#D??A# D}A#DcA; DHARDHAu DHA??DNA?? D??B??EiDn FgFiF??GB H??K?? IIL??IvM> I??M`J3M` JTM`JoMF J??M-J??L?? J??LwJxL[',
                           'DsI: CjI:B??I?? BQJsBQK| BQL[C5M2 C??M??DvM?? E??M??FWM& G&LLG&K> G&JGFCI~ EkI:DsI:'
                         ],
        hC             : [
                           ['J??D?? JHD??I??DR I}C??I}CV I}B??J%Bt JPBRK$BR KuBRK??B?? LAC/LAC?? LADDK??Di KOD??J??D??'],
                           [],
                           ['DsLb DELbC??LD CuL"CuK| CuK-C??J?? D4J_DsJ_ E&J_ERJw E??J??E??K> E??K??E`L8 E:LbDsLb']
                         ],
        xMin           : 71.5,
        xMax           : 785.5,
        yMin           : -15,
        yMax           : 801.5,
        wdth           : 820
      };
      font["&"]        = {
        sC             : [
                           'D??J{ D??K[EiLG F?M9F??M9 G??M9HMLl H??L"H??K1 H??IlF??H: GiF??H??D?? H??EQI!E?? I1FoI8F?? IRGWI??GW J/GWJGG+ JZF??JZFZ JZD??IvCk J??AlJ??A; J??@??J}@?? Ja@gJ=@g I??@gIs@?? H??BZ G=@??EJ@?? C??@??B??A?? A??B??A??D4 A??ErB??F?? CnGgEIHz D??I~D??J{'
                         ],
        hC             : [
                           ['E??GY DlFjD/F- C9E6C9D4 C9CIC??B?? D^BHEJBH F??BHG??Cp GUD_E??GY','F^Ie GZJLGZK1 GZK_GKKu G<K??F??K?? F??K??FjKL FEJ??FEJ{ FEJ8F^Ie']
                         ],
        xMin           : 36.5,
        xMax           : 619,
        yMin           : -46,
        yMax           : 763.5,
        wdth           : 654
      };
      font["("]        = {
        sC             : [
                           'FjL?? FjLfF-L" E??KxETKJ DhJOD*Hk CuG"CuEc CuAsEU??? E???iF0?E Fi>??Fi>m Fi>KFO>4 F5=??E??=?? Ex=??EN>2 B1???B1Ez B1G??B??I?? C??L?ETMG E|McE??Mc F4McFOMF FjM*FjL??'
                         ],
        xMin           : 55.5,
        xMax           : 339.5,
        yMin           : -211,
        yMax           : 784,
        wdth           : 366
      };
      font[")"]        = {
        sC             : [
                           'FjEz Fj???CK>2 C"=??B??=?? Bf=??BK>4 B2>KB2>m B2>??Bk?E B???iCE??? E%AsE%Ec E%G"DqHk D2JOCFKJ B??KxBnL" B1LfB1L?? B1M*BKMF BfMcB??Mc B??McCFMG D??L?E??I?? FjG??FjEz'
                         ],
        xMin           : 55.5,
        xMax           : 339.5,
        yMin           : -211,
        yMax           : 784,
        wdth           : 366
      };
      font["*"]        = {
        sC             : [
                           'ApKF ApKkA??K?? B!L!BEL! B^L!DNKD DFLKDFL?? DFM$D`M> DyMVD??MV ECMVE]M> EvM$EvL?? EvLJE|KZ GfK~G??K~ H>K~HVKd HoKJHoK# HoJaH$JP GaJBF3J- FmI{G/I) G??H=G??G?? G??GqGkGV GOG<G,G< F??G<FiG` F-H/E%IE C^GbB??Gb BsGbBWG~ B=G??B=H; B=H]B]H} B??I0C??J$ CAJ>B&J{ ApJ??ApKF'
                         ],
        xMin           : 22.5,
        xMax           : 470,
        yMin           : 381,
        yMax           : 778,
        wdth           : 529.5
      };
      font["+"]        = {
        sC             : [
                           'H=F5 H=E??H$Ew G??E]GjE] G^E]GFE` G/EdG!Ed F@Eb E??E`E`Eb E`C} E`C#D??C# D^C#DGC: D1CPD1C} D0Dm D/E_ C9EWB??EW AqEWAqF1 AqFqB%F?? B9F??B??F?? C9F??D/F?? D.G?? D.HVD7Hz D@H??DUI- DjI?D??I? E/I?EII& EcH??EcHk EcHYE`H5 E]G??E]G?? E^F?? F%F?? F9F??FbF?? F??F??F??F?? H=F??H=F5'
                         ],
        xMin           : 23,
        xMax           : 445.5,
        yMin           : 113,
        yMax           : 510.5,
        wdth           : 480
      };
      font[","]        = {
        sC             : [
                           'CX>s C6>sB??>?? B???%B???H B???fC?@q CuAkC??A?? D*BLDTBL DxBLD??B1 E)A??E)Au E)A^C???% C??>sCX>s'
                         ],
        xMin           : 96.5,
        xMax           : 243.5,
        yMin           : -168,
        yMax           : 69,
        wdth           : 276.5
      };
      font["-"]        = {
        sC             : [
                           'FYD?? ETD??B??D?? B.D??B.EP B.E??B??E?? CME??DhF" E??F*FOF* G%F*G%E_ G%D??FYD??'
                         ],
        xMin           : 54,
        xMax           : 370,
        yMin           : 225,
        yMax           : 308,
        wdth           : 416.5
      };
      font["."]        = {
        sC             : [
                           'CF@h B??@hBq@?? BMA-BMAa BMA??BqB5 B??BYCFBY CyBYC??B5 D?A??D?Aa D?A-C??@?? Cy@hCF@h'
                         ],
        xMin           : 69.5,
        xMax           : 190.5,
        yMin           : -45.5,
        yMax           : 75.5,
        wdth           : 249
      };
      font["/"]        = {
        sC             : [
                           'Bo@k BJ@kB/@?? A??@??A??A? A??ANA??Aa BhC2D9F= E??IHFZJ?? GYMyG??Mv H?MuHZM] HwMCHwL?? HwL??HlLk G??Ja G<I+FCG? DoD+ C=A" C"@kBo@k'
                         ],
        xMin           : 41,
        xMax           : 474,
        yMin           : -44,
        yMax           : 793.5,
        wdth           : 511.5
      };
      font[":"]        = {
        sC             : [
                           'DEHh DEH;D)G?? C??G??CcG?? C6G??B??G?? B~H;B~Hh B~HtBzH?? BuI"BuI/ BuIYB??Iv C/I??CZI?? DEI??DEHh',
                           'DVB?? DVBsD9BV C??B:CrB: CEB:C*BV B??BsB??B?? B??C1B??CT B??CyB??C?? B??D3B??DN C>DjCiDj DVDjDVB??'
                         ],
        xMin           : 89,
        xMax           : 202,
        yMin           : 60,
        yMax           : 551,
        wdth           : 298.5
      };
      font[";"]        = {
        sC             : [
                           'Bi??? A?????A??@a A??@??BfA?? C;B??CuB?? C??B??D3B?? DNBiDNBD DNA??C??AQ CC@~C>@W C5???Bi???',
                           'DSHb DSH6D7G?? C??G??CpG?? CDG??C(G?? B??H6B??Hb B??HoB??H?? B??H??B??I) B??ISB??Ip C=I??ChI?? DSI??DSHb'
                         ],
        xMin           : 39.5,
        xMax           : 200.5,
        yMin           : -95,
        yMax           : 548.5,
        wdth           : 298.5
      };
      font["<"]        = {
        sC             : [
                           'CfE?? C??ErDlD?? EJD:EnC?? E??C??E??CZ E??C6EwB?? E]B??E8B?? D??B??D??B?? D[C0C[D6 BzD??A??E? ATE[ATE?? ATFAA??Fb BsF??C`G?? DwH??D??I6 E0INEMIN EqINE??I3 F%H??F%Hu F%HSE??H5 E+GRCfE??'
                         ],
        xMin           : 9,
        xMax           : 306,
        yMin           : 94.5,
        yMax           : 518,
        wdth           : 381
      };
      font["="]        = {
        sC             : [
                           'D6D?? DwD??ExD?? FyD??G8D?? G??D??G??D( G??CQG8CQ FyCQExCT DwCWD6CW C??CWC_CS C"COB??CO B-COB-D% B-DwB??D~ CnD??D6D??',
                           'C??H?? GFH?? G??H??G??H9 G??GcGFGc C~Gd CgGdC:Gb B??G_ByG_ BRG_B:Gy B!G??B!H6 B!H~BuH?? B??H??C??H??'
                         ],
        xMin           : 48,
        xMax           : 429.5,
        yMin           : 134.5,
        yMax           : 487.5,
        wdth           : 510
      };
      font[">"]        = {
        sC             : [
                           'F??FI F??F%FmE?? D??D,B??B?? BjBxBQBx B.BxA??B?? A{C/A{CR A{CzA??C?? D??F7 DDFrCDGi B(H}B(I4 B(IWBCIs B`I??B??I?? C%I??CCIl E!GsFWF?? F??FxF??FI'
                         ],
        xMin           : 28,
        xMax           : 359,
        yMin           : 90.5,
        yMax           : 549,
        wdth           : 381
      };
      font["??"]        = {
        sC             : [
                           'FkLf F??LfG8LH GZL+GZK?? GZKEG:J?? F??J^F^J^ E??J^E??KP E??K??E??L2 F8LfFkLf',
                           'F4Ir F]IrF|IS F??I4F??H?? F??HJE??Gh D3F6 C5EJC5Dq C5C??C??B?? D??BBEzBB F6BBF??B?? GuC@G??C@ H2C@HOB?? HmB??HmBX HmA??GWA? FQ@|Ez@| D5@|B??A?? AuC-AuDq AuE??BPFn B??G/C??G?? E1H??ElII E??IrF4Ir'
                         ],
        xMin           : 25,
        xMax           : 469,
        yMin           : -35.5,
        yMax           : 721.5,
        wdth           : 523.5
      };
      font["?"]        = {
        sC             : [
                           'Cw@| CK@|C(@?? B??A5B??A_ B??A??C%BK CJB??C??B?? DbB??DbA?? DbAYDGA. D(@|Cw@|',
                           'D,Co C??CoCfC?? CGD,CGDS CGD??DDEz F.G) G,G??G,Hp G,IaFAJ@ E[J??DhJ?? D*J??CKJ_ BmI??BVI?? B.I??A??J? AuJ`AuJ?? AuKTB??K?? C??LfDhLf F,LfGLKL HmJ2HmHp HmGaG??Fs GYF0FEEF E0DZDvC?? DSCoD,Co'
                         ],
        xMin           : 25,
        xMax           : 469,
        yMin           : -35.5,
        yMax           : 721.5,
        wdth           : 523.5
      };
      font["@"]        = {
        sC             : [
                           'K=DT JUDTI??Ds I?D??H??EL H]D??H*D?? GyDdGHDd F]DdE|E< D??E??D??F?? D??H2F)IH G7J^HmJ^ H??J^I0J? ILI??ILIw ILI;HkH?? GiH{G2HJ FdG??FdF?? FdFbF??FG F??F*GIF, G??F0HgGJ I(HQIZHQ I??HQI??H2 J6G??J6Gi J6GUJ0G. J)F??J)Ft J)F3JaF" JwE??K=E?? LCE??LyF^ M)F??M)G?? M)I??KjK% J9L1HEL1 F)L1D??JZ CwH??CwFz CwDnD??C6 FSAwHkAw I9AwI??A?? KHBT KtBeK??Be L&BeLEBD LcB#LcA{ Lc@??J??@e Iv@9Hm@9 Gc@9FR@o EBA"D]A} B-C??B-Fz B-IqC}Km EXMzHEMz J??MzL{L3 NrJbNrG?? NrFDM??EN L??DTK=DT'
                         ],
        xMin           : 53.5,
        xMax           : 855.5,
        yMin           : -68.5,
        yMax           : 795.5,
        wdth           : 931
      };
      font["["]        = {
        sC             : [
                           'Dp>/ DZ>/D.>- C??>*Cl>* Bn>*Bn>?? Bn@OB}DL B??HHB??I| B{L! BzL0 BxLUB??Ls C)L??CPL?? CnL??D(L?? DdL??D??L?? D??L??E8L?? E^L??EpL?? FIL??FIL/ FIKXExKP E$KID1KM D7JwD7I?? D*Dy C???k Dp?n D???nEE?k E???iE???i FA?iFX?L Fp?0Fp>?? Fp>cFX>F FA>*E??>* E??>*EE>- D??>/Dp>/'
                         ],
        xMin           : 85.5,
        xMax           : 342.5,
        yMin           : -204,
        yMax           : 742,
        wdth           : 376
      };
      font["]"]        = {
        sC             : [
                           'Dn>/ D??>/E0>- E]>*Er>* Fp>*Fp>?? Fp@OFbDL FSHHFSI| FcL! FdL0 FfLUFLLs F3L??E??L?? EpL??E4L?? DzL??D]L?? DIL??D#L?? C??L??CnL?? B??L??B??L/ B??KXCfKP D8KIE-KM E%JwE%I?? E3Dy EB?k Dn?n DQ?nC???k C`?iCB?i B???iB???L Bn?0Bn>?? Bn>cB??>F B??>*CB>* C`>*C??>- DQ>/Dn>/'
                         ],
        xMin           : 85.5,
        xMax           : 342.5,
        yMin           : -204,
        yMax           : 742,
        wdth           : 376
      };
      font["{"]        = {
        sC             : [
                           'C>Er CuE??C??FY DFG!DFG] DFG??D@I# D9JAD9Jl D9L+EBL: EdL;F$LD FkLSFkL?? FkM;F2MZ E??MuELMu D??MuDKMX B??L??B??JO B??H?? B??GJ B??G/ BaF??A??F^ AGE??AGEa AGE5B#Dt B??D1B??Cb B??CFByB?? BqB[BqB@ Bq@??CA??? D">KE@>K E??>KF&>V FY>lFY?( FY?jF&?z E?????E@??? D~???DM@?? D&AoD&B@ D&BbD/B?? D7CcD7C?? D7D0C??D?? CfEEC>Er'
                         ],
        xMin           : 2.5,
        xMax           : 340,
        yMin           : -187.5,
        yMax           : 793,
        wdth           : 366
      };
      font["}"]        = {
        sC             : [
                           'DtEr D=E??C??FY ClG!ClG] ClG??CsI# CyJACyJl CyL+BpL: BNL;A??LD AGLSAGL?? AGM;A??MZ B/MuBgMu C"MuCgMX E)L??E)JO E#H?? D??GJ D??G/ ERF??E??F^ FkE??FkEa FkE5E??Dt E1D1E1Cb E1CFE9B?? EAB[EAB@ EA@??Dq??? C??>KBr>K B)>KA??>V AY>lAY?( AY?jA???z A?????Br??? C5???Cf@?? C??AoC??B@ C??BbC??B?? C|CcC|C?? C|D0D&D?? DLEEDtEr'
                         ],
        xMin           : 2.5,
        xMax           : 340,
        yMin           : -187.5,
        yMax           : 793,
        wdth           : 366
      };
      font["^"]        = {
        sC             : [
                           'E??M?? F;M??F??MG F??M2GsLZ H??K4 I&J??I&Jz I&JTH??J: HqI??HMI?? H,I??G??J; GAJ??E??L9 D!I??C]I?? C9I??B??J$ B??J@B??Jd B??J??B??K! CWKVEJMl EeM??E??M??'
                         ],
        xMin           : 96.5,
        xMax           : 498.5,
        yMin           : 547.5,
        yMax           : 803.5,
        wdth           : 581
      };
      font["_"]        = {
        sC             : [
                           'KM>r Hy>r H2>rG(>v E??>{EX>{ B$>{ A??>{Ac>v A5>r@??>r @??@$ A??@$CD@& D??@(Ej@( F/@(G8@" HA???H????? KM@$ KM>r'
                         ],
        xMin           : -17.5,
        xMax           : 645.5,
        yMin           : -168.5,
        yMax           : -77,
        wdth           : 626.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 298.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 298.5
      };

      return font;


      function supplement(basis,extra,offsetX,offsetY){
        var glyph      = {
              xMin     : basis.xMin,
              xMax     : basis.xMax,
              yMin     : basis.yMin,
              yMax     : basis.yMax,
              wdth     : basis.wdth
            },
            shapes     = basis.sC.map(shape=>shape),
            holes      = typeof basis.hC === "object" ? basis.hC.map(hole=>hole) : undefined ,
            extraShapes= extra === "dieresis" ? 2 : 1 , 
            extraHoles = extra === "ring" ? 1 : 0 ;

        if ( extraShapes === 2 ) {
          if ( holes ) { holes.unshift([]) }
          if ( extra === "dieresis" ) { shapes.unshift(dieresisRightCoded(offsetX,offsetY)) }
        }
        if ( extraHoles ) {
          if ( typeof holes !== "object" ) {
            holes      = basis.sC.map(shape=>[])
          }
          if ( extra === "ring" ) {
            holes.unshift(ringHoleCoded(offsetX,offsetY)) 
          }
        } else {
          if ( holes ) { holes.unshift([]) }
        }

        if ( extra === "dieresis" )   { 
          glyph.yMax   = dieresisYmax(offsetY);
          shapes.unshift(dieresisLeftCoded(offsetX,offsetY))
        }
        if ( extra === "circumflex" ) {
          glyph.yMax   = circumflexYmax(offsetY);
          shapes.unshift(circumflexCoded(offsetX,offsetY)) 
        }
        if ( extra === "acute" )      { 
          glyph.yMax   = acuteYmax(offsetY);
          shapes.unshift(acuteCoded(offsetX,offsetY)) 
        }
        if ( extra === "grave" )      { 
          glyph.yMax   = graveYmax(offsetY);
          shapes.unshift(graveCoded(offsetX,offsetY)) 
        }
        if ( extra === "tilde" )      { 
          glyph.yMax   = tildeYmax(offsetY);
          shapes.unshift(tildeCoded(offsetX,offsetY))
        }
        if ( extra === "ring" )       { 
          glyph.yMax   = ringYmax(offsetY);
          shapes.unshift(ringCoded(offsetX,offsetY))
        }
        glyph.sC       = shapes;
        if ( holes ) {
          glyph.hC     = holes
        }
        return glyph     
      };
      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
      // To support non-english letters, we need a variety of new symbols: acute, dieresis, etc.
      // It turns out that these symbols can be re-used, with some placement changes
      // To save space and code, that's what we do
      // These functions return the special symbols in compressed or raw forms
      function acuteRaw(dx,dy){
        // "M 148 579.5 Q 130.5 579.5 117 593 Q 104 606.5 104 624.5 Q 104 641 119 656 Q 140 676.5 183 733.5 Q 215 775.5 254.5 803.5 Q 268 812.5 280.5 812.5 Q 298 812.5 311.5 799 Q 324.5 785 324.5 767.5 Q 324.5 748 306 733 Q 271.5 706 240 662.5 Q 207 616.5 177 591.5 Q 163.5 579.5 148 579.5 Z"
        return [[148+dx,579.5+dy],[130.5+dx,579.5+dy,117+dx,593+dy],[104+dx,606.5+dy,104+dx,624.5+dy],[104+dx,641+dy,119+dx,656+dy],[140+dx,676.5+dy,183+dx,733.5+dy],[215+dx,775.5+dy,254.5+dx,803.5+dy],[268+dx,812.5+dy,280.5+dx,812.5+dy],[298+dx,812.5+dy,311.5+dx,799+dy],[324.5+dx,785+dy,324.5+dx,767.5+dy],[324.5+dx,748+dy,306+dx,733+dy],[271.5+dx,706+dy,240+dx,662.5+dy],[207+dx,616.5+dy,177+dx,591.5+dy],[163.5+dx,579.5+dy,148+dx,579.5+dy]]
      };
      function acuteCoded(dx,dy){
        return codeList(acuteRaw(dx,dy))
      };
      function acuteYmax(y){return 812+y};

      function graveRaw(dx,dy){
        // "M 281.5 618.5 Q 281.5 601 267.5 588 Q 253.5 575 236 575 Q 215 575 201 595.5 L 152 668 Q 126 704 91.5 730.5 Q 72.5 745.5 72.5 765.5 Q 72.5 783 85.5 797 Q 98.5 811 116 811 Q 146 811 214.5 729.5 Q 281.5 649.5 281.5 618.5 Z"
        return [[281.5+dx,618.5+dy],[281.5+dx,601+dy,267.5+dx,588+dy],[253.5+dx,575+dy,236+dx,575+dy],[215+dx,575+dy,201+dx,595.5+dy],[152+dx,668+dy],[126+dx,704+dy,91.5+dx,730.5+dy],[72.5+dx,745.5+dy,72.5+dx,765.5+dy],[72.5+dx,783+dy,85.5+dx,797+dy],[98.5+dx,811+dy,116+dx,811+dy],[146+dx,811+dy,214.5+dx,729.5+dy],[281.5+dx,649.5+dy,281.5+dx,618.5+dy]]
      };
      function graveCoded(dx,dy){
        return codeList(graveRaw(dx,dy))
      };
      function graveYmax(y){return 811+y};

      function circumflexRaw(dx,dy){
        // "M 288 825 Q 314.5 825 352.5 792 Q 364 782 405.5 737.5 L 483 654.5 Q 496 640 496 625 Q 496 607 482.5 593.5 Q 469 580.5 451 580.5 Q 435 580.5 420 594.5 Q 381 638.5 298 721.5 Q 174 569 139 569 Q 121.5 569 108 583 Q 94.5 596.5 94.5 614 Q 94.5 631 109 645.5 Q 136.5 672 258 810 Q 271 825 288 825 Z"
        return [[288+dx,825+dy],[314.5+dx,825+dy,352.5+dx,792+dy],[364+dx,782+dy,405.5+dx,737.5+dy],[483+dx,654.5+dy],[496+dx,640+dy,496+dx,625+dy],[496+dx,607+dy,482.5+dx,593.5+dy],[469+dx,580.5+dy,451+dx,580.5+dy],[435+dx,580.5+dy,420+dx,594.5+dy],[381+dx,638.5+dy,298+dx,721.5+dy],[174+dx,569+dy,139+dx,569+dy],[121.5+dx,569+dy,108+dx,583+dy],[94.5+dx,596.5+dy,94.5+dx,614+dy],[94.5+dx,631+dy,109+dx,645.5+dy],[136.5+dx,672+dy,258+dx,810+dy],[271+dx,825+dy,288+dx,825+dy]]
      };
      function circumflexCoded(dx,dy){
        return codeList(circumflexRaw(dx,dy))
      };
      function circumflexYmax(y){return 825+y};

      function caronRaw(dx,dy){
        return [[284+dx,731+dy],[176+dx,588+dy],[65+dx,588+dy],[-42+dx,731+dy],[50+dx,731+dy],[120+dx,642+dy],[191+dx,731+dy]]
      };
      function caronCoded(dx,dy){
        return codeList(caronRaw(dx,dy))
      };
      function caronYmax(y){return 731+y};

      // "M 162 669.5 Q 226 669.5 226 618.5 Q 226 604 204.5 590 Q 185 578 167.5 578 Q 107.5 578 107.5 628 Q 107.5 642.5 126 656 Q 144.5 669.5 162 669.5 Z M 425 673.5 Q 441.5 673.5 458.5 658 Q 476 643 476 628 Q 476 583 406 583 Q 386 583 370.5 593.5 Q 353 605 353 624.5 Q 353 658 375 667.5 Q 387 673.5 425 673.5 Z"
      function dieresisLeftRaw(dx,dy){
        return [[162+dx,669.5+dy],[226+dx,669.5+dy,226+dx,618.5+dy],[226+dx,604+dy,204.5+dx,590+dy],[185+dx,578+dy,167.5+dx,578+dy],[107.5+dx,578+dy,107.5+dx,628+dy],[107.5+dx,642.5+dy,126+dx,656+dy],[144.5+dx,669.5+dy,162+dx,669.5+dy]]
      };
      function dieresisLeftCoded(dx,dy){
        return codeList(dieresisLeftRaw(dx,dy))
      };
      function dieresisRightRaw(dx,dy){
        return [[425+dx,673.5+dy],[441.5+dx,673.5+dy,458.5+dx,658+dy],[476+dx,643+dy,476+dx,628+dy],[476+dx,583+dy,406+dx,583+dy],[386+dx,583+dy,370.5+dx,593.5+dy],[353+dx,605+dy,353+dx,624.5+dy],[353+dx,658+dy,375+dx,667.5+dy],[387+dx,673.5+dy,425+dx,673.5+dy]]
      };
      function dieresisRightCoded(dx,dy){
        return codeList(dieresisRightRaw(dx,dy))
      };
      function dieresisYmax(y){return 707+y};

      function tildeRaw(dx,dy){
        // "M 221.5 758.5 Q 270.5 758.5 300 730 L 340.5 678.5 Q 363.5 650 395.5 650 Q 423 650 437 668 L 459 711 L 469 740 Q 476 754 498.5 754 Q 535 754 535 718 Q 535 700.5 514 659 Q 494.5 620 480 605 Q 453 577.5 410.5 577.5 Q 346.5 577.5 310.5 605 Q 297 615.5 267.5 657.5 Q 247 685.5 221.5 685.5 Q 206.5 685.5 194.5 679.5 Q 182.5 674 173.5 663 L 152 621.5 Q 140 599.5 120.5 599.5 Q 105 599.5 94 609.5 Q 83 619.5 83 634.5 Q 83 640 84 645.5 Q 98 695.5 133.5 726.5 Q 171.5 758.5 221.5 758.5 Z"
        return [[221.5+dx,758.5+dy],[270.5+dx,758.5+dy,300+dx,730+dy],[340.5+dx,678.5+dy],[363.5+dx,650+dy,395.5+dx,650+dy],[423+dx,650+dy,437+dx,668+dy],[459+dx,711+dy],[469+dx,740+dy],[476+dx,754+dy,498.5+dx,754+dy],[535+dx,754+dy,535+dx,718+dy],[535+dx,700.5+dy,514+dx,659+dy],[494.5+dx,620+dy,480+dx,605+dy],[453+dx,577.5+dy,410.5+dx,577.5+dy],[346.5+dx,577.5+dy,310.5+dx,605+dy],[297+dx,615.5+dy,267.5+dx,657.5+dy],[247+dx,685.5+dy,221.5+dx,685.5+dy],[206.5+dx,685.5+dy,194.5+dx,679.5+dy],[182.5+dx,674+dy,173.5+dx,663+dy],[152+dx,621.5+dy],[140+dx,599.5+dy,120.5+dx,599.5+dy],[105+dx,599.5+dy,94+dx,609.5+dy],[83+dx,619.5+dy,83+dx,634.5+dy],[83+dx,640+dy,84+dx,645.5+dy],[98+dx,695.5+dy,133.5+dx,726.5+dy],[171.5+dx,758.5+dy,221.5+dx,758.5+dy]]
      };
      function tildeCoded(dx,dy){
        return codeList(tildeRaw(dx,dy))
      };
      function tildeYmax(y){return 714+y};

      function ringHoleRaw(dx,dy){
        // "M 128 707.5 Q 128 778 178.5 819 Q 227 858 305.5 858 Q 366.5 858 410 824 Q 457.5 786.5 457.5 727 Q 457.5 654.5 413.5 617.5 Q 370 580.5 282.5 579 Q 216 578 172 616 Q 128 653.5 128 707.5 Z"
        return [
          [[290+dx,650.5+dy],[332+dx,652+dy,351.5+dx,662.5+dy],[384+dx,680+dy,384+dx,727+dy],[384+dx,755+dy,357.5+dx,771+dy],[335.5+dx,785.5+dy,305.5+dx,785.5+dy],[199.5+dx,785.5+dy,201.5+dx,707.5+dy],[202+dx,685+dy,231+dx,667+dy],[260.5+dx,649.5+dy,290+dx,650.5+dy]]
          // [[128+dx,707.5+dy],[128+dx,778+dy,178.5+dx,819+dy],[227+dx,858+dy,305.5+dx,858+dy],[366.5+dx,858+dy,410+dx,824+dy],[457.5+dx,786.5+dy,457.5+dx,727+dy],[457.5+dx,654.5+dy,413.5+dx,617.5+dy],[370+dx,580.5+dy,282.5+dx,579+dy],[216+dx,578+dy,172+dx,616+dy],[128+dx,653.5+dy,128+dx,707.5+dy]]
        ]
      };
      function ringHoleCoded(dx,dy){
        return [codeList(ringHoleRaw(dx,dy)[0])]
      };
      function ringRaw(dx,dy){
        // "M 290 650.5 Q 332 652 351.5 662.5 Q 384 680 384 727 Q 384 755 357.5 771 Q 335.5 785.5 305.5 785.5 Q 199.5 785.5 201.5 707.5 Q 202 685 231 667 Q 260.5 649.5 290 650.5 Z"
        // "M 290 650.5 Q 260.5 649.5 231 667 Q 202 685 201.5 707.5 Q 199.5 785.5 305.5 785.5 Q 335.5 785.5 357.5 771 Q 384 755 384 727 Q 384 680 351.5 662.5 Q 332 652 290 650.5 Z"
        // return [[290+dx,650.5+dy],[260.5+dx,649.5+dy,231+dx,667+dy],[202+dx,685+dy,201.5+dx,707.5+dy],[199.5+dx,785.5+dy,305.5+dx,785.5+dy],[335.5+dx,785.5+dy,357.5+dx,771+dy],[384+dx,755+dy,384+dx,727+dy],[384+dx,680+dy,351.5+dx,662.5+dy],[332+dx,652+dy,290+dx,650.5+dy]]
        return [[128+dx,707.5+dy],[128+dx,778+dy,178.5+dx,819+dy],[227+dx,858+dy,305.5+dx,858+dy],[366.5+dx,858+dy,410+dx,824+dy],[457.5+dx,786.5+dy,457.5+dx,727+dy],[457.5+dx,654.5+dy,413.5+dx,617.5+dy],[370+dx,580.5+dy,282.5+dx,579+dy],[216+dx,578+dy,172+dx,616+dy],[128+dx,653.5+dy,128+dx,707.5+dy]]
        // return [[290+dx,650.5+dy],[332+dx,652+dy,351.5+dx,662.5+dy],[384+dx,680+dy,384+dx,727+dy],[384+dx,755+dy,357.5+dx,771+dy],[335.5+dx,785.5+dy,305.5+dx,785.5+dy],[199.5+dx,785.5+dy,201.5+dx,707.5+dy],[202+dx,685+dy,231+dx,667+dy],[260.5+dx,649.5+dy,290+dx,650.5+dy]]
      };
      function ringCoded(dx,dy){
        return codeList(ringRaw(dx,dy))
      };
      function ringYmax(y){return 785+y};


      function dotlessiRaw(){
        // "M 183 221.5 Q 183 192 184.5 134 Q 186.5 75.5 186.5 46 Q 186.5 24.5 173 11 Q 160 -2.5 138.5 -2.5 Q 117.5 -2.5 104 11 Q 90.5 24.5 90.5 46 Q 90.5 75.5 89 134 Q 87 192 87 221.5 Q 87 267.5 92 336 Q 97 404.5 97 450.5 Q 97 472.5 110.5 486 Q 124 500 145 500 Q 166 500 179 486 Q 192.5 472.5 192.5 450.5 Q 192.5 404.5 187.5 336 Q 183 267.5 183 221.5 Z"        // "M 183 221.5 Q 183 192 184.5 134 Q 186.5 75.5 186.5 46 Q 186.5 24.5 173 11 Q 160 -2.5 138.5 -2.5 Q 117.5 -2.5 104 11 Q 90.5 24.5 90.5 46 Q 90.5 75.5 89 134 Q 87 192 87 221.5 Q 87 267.5 92 336 Q 97 404.5 97 450.5 Q 97 472.5 110.5 486 Q 124 500 145 500 Q 166 500 179 486 Q 192.5 472.5 192.5 450.5 Q 192.5 404.5 187.5 336 Q 183 267.5 183 221.5 Z"
        return [[183,221.5],[183,192,184.5,134],[186.5,75.5,186.5,46],[186.5,24.5,173,11],[160,-2.5,138.5,-2.5],[117.5,-2.5,104,11],[90.5,24.5,90.5,46],[90.5,75.5,89,134],[87,192,87,221.5],[87,267.5,92,336],[97,404.5,97,450.5],[97,472.5,110.5,486],[124,499.5,145,499.5],[166,499.5,179,486],[192.5,472.5,192.5,450.5],[192.5,404.5,187.5,336],[183,267.5,183,221.5]]
      };
      function dotlessiCoded(){
        return codeList(dotlessiRaw())
      };
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  JURA  JURA  JURA
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:true,reverseShapes:false},nbsp=' ';

      font["a"]        = {
        sC             : [
                           'F&E?? CgE??B9EWB9C= B9A??B??ABC??AB ESAB F`ABGaA`H2B" H2A?? H2A@H^A4HzA4 H??A4I?A>I?A?? I?FH I?GwH??HFGiHF E9HF CUHFB9G??B9Fn B9F"BcE??B~E?? C8E??CEF<CEFn CEG%CwG9EGG9 GZG9 G??G9H2G(H2Fh H2E??'
                         ],
        hC             : [
                           ['H2D?? H2C??G??BNESBN C??BN CyBNCEB|CEC4 CEDvC??D??F&D??']
                         ],
        xMin           : 59.5,
        xMax           : 510.5,
        yMin           : -7,
        yMax           : 450,
        wdth           : 580
      };
      font["b"]        = {
        sC             : [
                           'CbGe CbJP CbJ??CAK)B??K) BpK)BTJ??BTJP BTA?? BTA>B??A4B??A4 CSA4CbA`CbA?? CbB" D3AbE4ABFBAB F|AB I?ABJhA}JhC?? JhEk JhG??I?HFF|HF FBHF E4HFD3H&CbGe'
                         ],
        hC             : [
                           ['FBG9 F|G9 H??G9IZG(IZEe IZD" IZBaH??BNF|BN FBBN D"BNCbC`CbD?? CbD?? CbF)D"G9FBG9']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["c"]        = {
        sC             : [
                           'H:AB IwABI??B;I??C. I??CoIwC??IKC?? I/C??H??CyH??C4 H??BgHtBNH,BN F&BN C??BNCEBcCED" CEEe CEG%C??G9F&G9 H,G9 HtG9H??G!H??FT H??E??I/E??IKE?? IgE??I??E??I??FX I??GKIwHFH:HF F&HF CbHFB9G??B9Ek B9C?? B9A}CbABF&AB'
                         ],
        xMin           : 59.5,
        xMax           : 551.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 609
      };
      font["d"]        = {
        sC             : [
                           'B9Ek B9C?? B9A}CbABF$AB F^AB GmABHnAbI?B" I?A?? I?A`IMA4I??A4 I??A4JLA>JLA?? JLJQ JLJ}J>K)I??K) IoK)I?J??I?JQ I?HF E??HF CbHFB9G??B9Ek'
                         ],
        hC             : [
                           ['CED" CEEe CEG(C??G9E??G9 I?G9 I?D?? I?C`H~BNF^BN F$BN C??BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["e"]        = {
        sC             : [
                           'JLEk JLG??I#HFF`HF F&HF CbHFB9G??B9Ek B9C?? B9A}CbABF&AB HbAB I??ABJ8B;J8C. J8CoI??C??IsC?? IVC??I+CyI+C4 I+BgH??BNHTBN F&BN C??BNCEBcCED" CED?? JLD??'
                         ],
        hC             : [
                           ['F`G9 H^G9I5G*I?E?? CEE?? CMG!C??G9F&G9']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 635.5
      };
      font["f"]        = {
        sC             : [
                           'E??I?? F>I??FlI??FlJQ FlJ}FPJ??E??J?? C??J??BjJhB_HD B9H>A??H+A??G?? A??GaB7GKB_GC B_A?? B_A@B??A4B??A4 CYA4CkA^CkA?? CkG9 EeG9 F2G9F>GaF>G} F>H&F$HFEeHF CkHF CqI??DFI??E??I??'
                         ],
        xMin           : 47.5,
        xMax           : 340.5,
        yMin           : -7,
        yMax           : 621,
        wdth           : 336.5
      };
      font["g"]        = {
        sC             : [
                           'JL@+ JLG?? JLHJI??HTI??HT IMHTI?H)I?G} I?Ge HnH&GmHFF^HF F$HF CbHFB9G??B9Ek B9C?? B9A}CbABE??AB I?AB I???? I??KI5?>Hz?> C???> CW?>CE?UCE@" CE@aC*@xB??@x Be@xB9@mB9??? B9?,BT>1C??>1 H??>1 J$>1JL>??JL@+'
                         ],
        hC             : [
                           ['E??BN C??BNCEBaCED" CEEe CEG(C??G9F$G9 F^G9 H~G9I?F)I?D?? I?BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 654
      };
      font["h"]        = {
        sC             : [
                           'FBG9 F|G9 H??G9IZG(IZEe IZA?? IZAEI??A4J"A4 JYA4JhA^JhA?? JhEk JhG??I?HFF|HF FBHF E4HFD3H&CbGe CbJP CbJ??CAK)B??K) BpK)BTJ??BTJP BTA?? BTA>B??A4B??A4 CKA4CbASCbA?? CbD?? CbF$D"G9FBG9'
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 663
      };
      font["i"]        = {
        sC             : [
                           'B??Iu CEIuC??I??C??JW C??J??CCK;B??K; BcK;A??J??A??JW A??I??BjIuB??Iu',
                           'BPG?? BPAj BPA%Bz@??B??@?? CM@??C^A@C^Aj C^G?? C^HbC2HrB??Hr B|HrBPHbBPG??'
                         ],
        xMin           : 46.5,
        xMax           : 166,
        yMin           : -21.5,
        yMax           : 636.5,
        wdth           : 212.5
      };
      font["j"]        = {
        sC             : [
                           'CbAB CbG{ CbH)CSHTB??HT BcHTBTH)BTG{ BTAB BT???A???y@-?y ?}?y?S?j?S?4 ?S>???n>m@->m B5>mCb>??CbAB',
                           'B??Iu CIIuC??I??C??JW C??J??CGK;B??K; BgK;B"J??B"JW B"I??BnIuB??Iu'
                         ],
        xMin           : -119.5,
        xMax           : 167.5,
        yMin           : -171,
        yMax           : 636.5,
        wdth           : 216.5
      };
      font["k"]        = {
        sC             : [
                           'HpAw HpA??HhB"HTB1 DnEC GCGU GaGkGcG??GcG?? GcH4G?HPF??HP F??HPFnH@F`H4 CbEi CbJU CbJ??C6K)B??K) B??K)BTJ??BTJU BTA?? BTACB|A4B??A4 C:A4CbACCbA?? CbDa C??D?? GqAQ G??AEG??A6H,A6 HTA6HpAYHpAw'
                         ],
        xMin           : 73,
        xMax           : 470.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 484
      };
      font["l"]        = {
        sC             : [
                           'DXAB E#ABE0AlE0A?? E0B@D??BNDXBN C??BNC??BcC??C( C??JQ C??J??CsK)C:K) B??K)BtJ??BtJQ BtCE BtA??B??ABDJAB'
                         ],
        xMin           : 88.5,
        xMax           : 247,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 287
      };
      font["m"]        = {
        sC             : [
                           'EQG9 F??G9GMG(GMEe GMA?? GMAIGkA4G??A4 HPA4H^AYH^A?? H^D?? H^FNI=G9JYG9 K??G9LMG*LMEe LMA?? LMA>L{A4L??A4 M-A4MZA>MZA?? MZEk MZG??LDHFJYHF I_HFHxG??H0G; GoH0FhHFEQHF DaHFC??H+C`Gk C`G{ C`H8C?HTB??HT BzHTBRHHBRG?? BRA?? BRA>B??A4B??A4 CIA4C`ASC`A?? C`D?? C`FPD7G9EQG9'
                         ],
        xMin           : 72,
        xMax           : 780,
        yMin           : -7,
        yMax           : 457,
        wdth           : 848.5
      };
      font["n"]        = {
        sC             : [
                           'F@G9 FzG9 H??G9IXG(IXEe IXA?? IXAEI~A4I??A4 JWA4JfA^JfA?? JfEk JfG??I=HFFzHF F@HF E2HFD1H&C`Ge C`G{ C`H8C?HTB??HT BzHTBRHHBRG?? BRA?? BRA>B??A4B??A4 CIA4C`ASC`A?? C`D?? C`F$C??G9F@G9'
                         ],
        xMin           : 72,
        xMax           : 593.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["o"]        = {
        sC             : [
                           'F`AB I#ABJLA}JLC?? JLEk JLG??I#HFF`HF F&HF CbHFB9G??B9Ek B9C?? B9A}CbABF&AB'
                         ],
        hC             : [
                           ['F&BN C??BNCEBcCED" CEEe CEG%C??G9F&G9 F`G9 HrG9I?G(I?Ee I?D" I?BaHrBNF`BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 640.5
      };
      font["p"]        = {
        sC             : [
                           'JhC?? JhEk JhG??I?HFF|HF FBHF E4HFD3H&CbGe CbG} CbH)CSHTB??HT B??HTBTHJBTG?? BT?6 BT>??Bc>_B??>_ C2>_Cb>iCb?6 CbAB F??AB I?ABJhA}JhC??'
                         ],
        hC             : [
                           ['IZEe IZD" IZBaH??BNF??BN CbBN CbD?? CbF)D"G9FBG9 F|G9 H??G9IZG(IZEe']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["q"]        = {
        sC             : [
                           'B9C?? B9A}CbABE??AB I?AB I??6 I?>mIo>_I??>_ J>>_JL>??JL?6 JLG?? JLHJI??HTI??HT IkHTI?HHI?G} I?Ge HnH)GmHFF`HF F&HF CbHFB9G??B9Ek'
                         ],
        hC             : [
                           ['CEEe CEG%C??G9F&G9 F`G9 H~G9I?F&I?D?? I?BN E??BN C??BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["r"]        = {
        sC             : [
                           'E??G9 F`G9 F??G9G7GGG7G?? G7H+F??HFF`HF E??HF D??HFD/H&C`Ge C`G{ C`H8C?HTB??HT BzHTBRHHBRG?? BRA?? BRA>B??A4B??A4 CIA4C`ASC`A?? C`D?? C`FJDBG9E??G9'
                         ],
        xMin           : 72,
        xMax           : 378.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 396
      };
      font["s"]        = {
        sC             : [
                           'C??AB GKAB IMABI??B)I??CC I??DHIXEUG??EU D"EU CoEUCCE}CCFN CCF??CgG9D"G9 H+G9 HrG9H??G!H??FT H??E??I-E??IIE?? IeE??I??E??I??FX I??GKIuHFH8HF D??HF BzHFB7GcB7FN B7E=B??DHDFDH H&DH H`DHH??C??H??CC H??BnH`BNH&BN C??BN CUBNCCBgCCC4 CCCqC(C??B~C?? BRC??B7CoB7C. B7B;BRABC??AB'
                         ],
        xMin           : 58.5,
        xMax           : 552.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 610
      };
      font["t"]        = {
        sC             : [
                           'CkD" CkG9 EeG9 F2G9F>GaF>G} F>H&F"HFEeHF CkHF CkI~ CkJ>CKJWB??JW BzJWB_J>B_I~ B_HD B9H>A??H+A??G?? A??GaB7GIB_GC B_C?? B_A??C??ABE??AB F`ABFjAqFjA?? FjB@F<BNE??BN D<BNCkBaCkD"'
                         ],
        xMin           : 47.5,
        xMax           : 339.5,
        yMin           : 0,
        yMax           : 586.5,
        wdth           : 364
      };
      font["u"]        = {
        sC             : [
                           'FpBN F6BN D$BNCWBaCWD" CWG?? CWHBC2HTB??HT BXHTBJH+BJG?? BJC?? BJA}CsABF6AB FpAB G??ABH??AbIQB" IQA?? IQAMIqA4I??A4 J6A4J^A@J^A?? J^G?? J^HJJ0HTI??HT IgHTIQH4IQG?? IQD?? IICmH??BNFpBN'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["v"]        = {
        sC             : [
                           'DdAB E??AB H??G?? H??G??H??H)H??H0 H??HdHxHrHWHr H:HrG??HdG??H< EEBV B??H: B??HNBlHrB>Hr B"HrA}HdA}H. A}H)A}G??A??G??'
                         ],
        xMin           : 29,
        xMax           : 492,
        yMin           : 0,
        yMax           : 471.5,
        wdth           : 520.5
      };
      font["w"]        = {
        sC             : [
                           'MZG?? McG??McG??McG?? McHRMAH^L??H^ L??H^LhHRLUH& JNBF H@G?? H2HBG??HRGuHR GGHRG1H@G#G?? D??BF B??H& B|HRBaH^BBH^ A??H^A??HRA??G?? A??G??A??G??A??G?? D)AB E`AB GsFv IoAB K&AB'
                         ],
        xMin           : 31,
        xMax           : 784,
        yMin           : 0,
        yMax           : 461.5,
        wdth           : 814
      };
      font["x"]        = {
        sC             : [
                           'I/Aj I/A??H??A??H??B" FJD?? H??Ge I-G??I/G??I/G?? I/HBH??H[HlH[ HRH[H>HVH,HD EeE[ B??HD B??HRBtH[BZH[ B;H[A??HBA??G?? A??G??A??G??B-Ge D|D?? B-B" B$A??A??A??A??Aj A??ACB=A,BZA, BtA,B??A4B??AC EeD- H,AC H:A6HRA,HlA, H??A,I/ACI/Aj'
                         ],
        xMin           : 41.5,
        xMax           : 502.5,
        yMin           : -11,
        yMax           : 460.5,
        wdth           : 544.5
      };
      font["y"]        = {
        sC             : [
                           'J^@+ J^G?? J^HJJ0HTI??HT IgHTIQH4IQG?? IQD?? IQCmH??BNFpBN F6BN D$BNCWBaCWD" CWG?? CWHBC2HTB??HT BXHTBJH+BJG?? BJC?? BJA}CsABF6AB FpAB G??ABH??AbIQB" IQ??? IQ?KIG?>H???> D/?> Ci?>CW?UCW@" CW@aC;@xB??@x Bv@xBJ@mBJ??? BJ?,Bg>1C??>1 H??>1 J6>1J^>??J^@+'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 663
      };
      font["z"]        = {
        sC             : [
                           'C??BN I;G/ I;HF C??HF BcHFB7GsB7F6 B7EkBaE^B|E^ C4E^CCE??CCF6 CCF??COG9C??G9 G{G9 B7BR B7AB G??AB I9ABIeA??IeCQ IeC??I7D+H??D+ HtD+HWC??HWCQ HWB|HRBNG??BN'
                         ],
        xMin           : 58.5,
        xMax           : 529,
        yMin           : 0,
        yMax           : 450,
        wdth           : 580
      };
      font["A"]        = {
        sC             : [
                           'FfJ?? EEJ?? AwA?? AsA??AqAqAqAf AqA0B$A!B7A! BTA!BpA6B??AY C??D3 H$D3 I+AY I5A@IQA!IuA! I??A!J:A0J:Af J:AqJ8A??J4A??'
                         ],
        hC             : [
                           ['D>E? E??IQ GmE?']
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : -16,
        yMax           : 621,
        wdth           : 595.5
      };
      font["B"]        = {
        sC             : [
                           'BgA?? BgAmBtABC(AB FRAB H??ABJ>A}J>D) J>DN J>E??I??F]H??F?? ITG?ImG??ImHb ImJ`H>J??E??J?? C(J?? B??J??BgJ??BgJF'
                         ],
        hC             : [
                           ['FvF" HbF"I1E??I1DH I1D) I1BeHbBNFRBN CsBN CsF"','E??G/ CsG/ CsI?? E??I?? G??I??H`ImH`H[ H`GKG??G/E??G/']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 628.5
      };
      font["C"]        = {
        sC             : [
                           'HNAB I??ABJ$B;J$C. J$CoI??C??I_C?? ICC??H??CyH??C4 H??BgH??BNH@BN F:BN D&BNCYBcCYD- CYH0 CYI}D+I??E??I?? H@I?? H??I??H??IyH??I) H??HfICHVI_HV I{HVJ$HbJ$I- J$J"I??J??HNJ?? E??J?? CwJ??BLJbBLH4 BLD) BLA}CuABF:AB'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 616
      };
      font["D"]        = {
        sC             : [
                           'J>H4 J>JbH??J??FvJ?? C(J?? B??J??BgJ??BgJF BgA?? BgAmBtABC(AB FRAB H??ABJ>A}J>D)'
                         ],
        hC             : [
                           ['I1D- I1BcHdBNFRBN CsBN CsI?? FvI?? HbI??I1I}I1H0']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 643.5
      };
      font["E"]        = {
        sC             : [
                           'CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI?? IiI?? I??I??J>I??J>JQ J>J}J$J??IiJ?? C(J?? B??J??BgJ??BgJF BgA?? BgAYB??ABC(AB IiAB I??ABJ>AOJ>A?? J>B/J$BNIiBN CsBN'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 621
      };
      font["F"]        = {
        sC             : [
                           'CsA?? CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI?? IiI?? I??I??J>I??J>JQ J>J}J$J??IiJ?? C(J?? B??J??BgJ??BgJF BgA?? BgA^BvA4C,A4 C^A4CsASCsA??'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 621,
        wdth           : 600.5
      };
      font["G"]        = {
        sC             : [
                           'H??D?? H??C, H??BcH??BNH@BN E??BN D)BNCYBcCYD) CYH4 CYI{D)I??F:I?? H@I?? H??I??H??I{H??I+ H??HpI5HVI_HV I??HVJ$HpJ$I/ J$J"I??J??HNJ?? F:J?? CyJ??BLJhBLH: BLD" BLA{CuABE??AB HNAB I??ABJ$B5J$C! J$E?? F??E?? FfE??F>E??F>ES F>E*F^D??F??D??'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 629.5
      };
      font["H"]        = {
        sC             : [
                           'CsA?? CsE?? I1E?? I1A?? I1AEIVA4I{A4 J0A4J>A^J>A?? J>JU J>J??I??K)IwK) I?K)I1J??I1JU I1G% CsG% CsJU CsJ??C`K)C(K) B??K)BgJ??BgJU BgA?? BgA>B??A4C,A4 C^A4CsASCsA??'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["I"]        = {
        sC             : [
                           'CsA?? CsJY CsJ??CGK)C,K) B??K)BgJ??BgJY BgA?? BgABB??A4C*A4 CdA4CsA^CsA??'
                         ],
        xMin           : 82,
        xMax           : 152,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 234
      };
      font["J"]        = {
        sC             : [
                           'EUB> C`B>B??BTB??D$ B??DVBvDzBLDz A??DzA??DZA??D$ A??AlC,A2EUA2 G??A2I%AlI%C?? I%JY I%J??H|K)H`K) H@K)G??J??G??J[ G??C?? G??BTGIB>EUB>'
                         ],
        xMin           : 32,
        xMax           : 498,
        yMin           : -8,
        yMax           : 627.5,
        wdth           : 577
      };
      font["K"]        = {
        sC             : [
                           'I}Aw I}A??IqA??IcB- E,Fv HbJ0 HxJJHzJdHzJj HzJ??HTK)H4K) G??K)G??J??GuJ?? CsFf CsJU CsJ??CGK)C,K) B??K)BgJ??BgJY BgA?? BgABB??A4C*A4 CKA4CsACCsA?? CsEE DFF+ HvAY H??ACH??A4I5A4 IQA4I}AOI}Aw'
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 546.5
      };
      font["L"]        = {
        sC             : [
                           'C(AB H~AB ICABIQAlIQA?? IQB-I9BNH~BN CsBN CsJ[ CsJ??CKK)C,K) B??K)BgJ??BgJ[ BgA?? BgAMB??ABC(AB'
                         ],
        xMin           : 82,
        xMax           : 519.5,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 541
      };
      font["M"]        = {
        sC             : [
                           'FfEc F??EcF??EwF??E{ IZI? IZA?? IZAMIwA4I??A4 JHA4JhAKJhA?? JhJU JhJ??JLK)J"K) I??K)IoJ??IZJ} FfFv CsJ} C^J??CEK)C(K) B??K)BgJ??BgJU BgA?? BgA>B??A4C,A4 CfA4CsA`CsA?? CsI? F1E{ F6EuFFEcFfEc'
                         ],
        xMin           : 82,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 676.5
      };
      font["N"]        = {
        sC             : [
                           'I{A4 J0A4J>A^J>A?? J>JU J>J??I??K)IwK) IZK)I1J??I1JP I1C( CsJ} C^J??CEK)C(K) B??K)BgJ??BgJU BgA?? BgA>B??A4C,A4 CfA4CsAWCsA?? CsI3 ICAB IIA:IaA4I{A4'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["O"]        = {
        sC             : [
                           'F+A0 HLA0I??B]I??D?? I??GZ I??I??HLK-F+K- C??K-B>I??B>GZ B>D?? B>B]C??A0F+A0'
                         ],
        hC             : [
                           ['F+I?? G??I??H??I#H??GU H??D?? H??C6G??B=F+B= DBB=CKC6CKD?? CKGU CKI#D>I??F+I??']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -9,
        yMax           : 629.5,
        wdth           : 617
      };
      font["P"]        = {
        sC             : [
                           'CsA?? CsF6 F|F6 HfF6ImG%ImHp ImJjH>K$E??K$ C(K$ B??K$BgJ??BgJP BgA?? BgABB??A4C*A4 CdA4CsA^CsA??'
                         ],
        hC             : [
                           ['E??GC CsGC CsI?? E??I?? G??I??H`I??H`Hp H`GeG??GCE??GC']
                         ],
        xMin           : 82,
        xMax           : 533,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 566
      };
      font["Q"]        = {
        sC             : [
                           'F+A0 F??A0G??AIHWAy H??A@ I!A0I;A*IOA* IwA*I??AOI??Am I??A??I??A??IwB) I?B] IyC%I??C??I??D?? I??GZ I??I??HLK-F+K- C??K-B>I??B>GZ B>D?? B>B]C??A0F+A0'
                         ],
        hC             : [
                           ['F+I?? G??I??H??I#H??GU H??D?? H??D7HxCsHWC? G??C?? GaD-GGD3G7D3 F??D3FlC??FlCm FlCWF??C=F??C4 GoBe G;BJFzB=F+B= DBB=CKC6CKD?? CKGU CKI#D>I??F+I??']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -12,
        yMax           : 629.5,
        wdth           : 617
      };
      font["R"]        = {
        sC             : [
                           'G??FR H??FxImGZImHv ImJtH>K/E??K/ C(K/ B??K/BgK"BgJY BgA?? BgABB??A4C*A4 CdA4CsA^CsA?? CsF6 F^F6 G??E2HnB"HpA?? HrAbH??A4I3A4 I_A4I}AYI}A?? I}A??I!E,G??FR'
                         ],
        hC             : [
                           ['CsI?? E??I?? G??I??H`I??H`Hp H`G]G??GCE??GC CsGC']
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 630.5,
        wdth           : 594.5
      };
      font["S"]        = {
        sC             : [
                           'CEHb CEI#CiI??D??I?? FbI?? HxI??IAI??IAH< IAG??I]GiI??Gi J$GiJPG{JPH< JPJxI!K+FbK+ EMK+ B??K+B9I~B9Hh B9G5B??FRDHF+ H^EG H|E?ICD??ICC?? ICC;I!B>G??B> F"B> C??B>CGBTCGD$ CGDVC,DzB??Dz BTDzB9DZB9D$ B9AjCkA2F"A2 G_A2 I??A2JPBaJPC{ JPD??I??F+HDFR D+G1 CuG?CEG??CEHb'
                         ],
        xMin           : 59.5,
        xMax           : 583,
        yMin           : -8,
        yMax           : 628.5,
        wdth           : 642.5
      };
      font["T"]        = {
        sC             : [
                           'H0J?? BHJ?? A??J??AuJrAuJU AuJ:A??I??BHI?? DnI?? DnA?? DnACD??A4E;A4 E^A4E??ACE??A?? E??I?? H0I?? HxI??H??J8H??JS H??J{HnJ??H0J??'
                         ],
        xMin           : 25,
        xMax           : 481,
        yMin           : -7,
        yMax           : 621,
        wdth           : 507.5
      };
      font["U"]        = {
        sC             : [
                           'I#J[ I#D?? I#C6H,B=FDB= D]B=CfC6CfD?? CfJ[ CfJ??C=K)B??K) B??K)BXJ??BXJY BXD?? BXB]C??A0FDA0 HfA0J0B]J0D?? J0JY J0J??I??K)ImK) IMK)I#J??I#J['
                         ],
        xMin           : 75,
        xMax           : 567,
        yMin           : -9,
        yMax           : 627.5,
        wdth           : 642.5
      };
      font["V"]        = {
        sC             : [
                           'I+J?? E??B?? B??J?? BvJ??BZK;B7K; B"K;AqK-AqJz AqJnAsJ`AwJS EEAB FfAB J4JS J8J`J:JnJ:Jz J:K-I??K;IuK; IVK;I;K&I+J??'
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : 0,
        yMax           : 636.5,
        wdth           : 595.5
      };
      font["W"]        = {
        sC             : [
                           'K??B~ I9J{ I)K+H??K;HfK; HPK;H&K-G??J} ECB~ B??J?? BvK3BVK=B9K= A??K=AwK$AwJ?? AwJzAwJvA??J^ D|AB E??AB HfIO KCAB LSAB ONJU OVJnOVJrOVJz OVJ??OPK5N??K5 NwK5NWK)NIJ??'
                         ],
        xMin           : 26,
        xMax           : 906,
        yMin           : 0,
        yMax           : 637.5,
        wdth           : 932.5
      };
      font["X"]        = {
        sC             : [
                           'IMK) I/K)H??J??H??J?? E??F?? B??J?? B??J??BtK)BRK) BBK)A??J??A??Jd A??J[A??JHA??J2 E2F- A??B) A??A??A??A??A??Au A??AKB5A4BRA4 BnA4B??AEB??A[ E??EQ H??A[ H??AII-A4IMA4 IkA4I??AGI??Au I??A??I??A??I??B) FpF- I??J2 I??JJI??J[I??Jd I??J??IcK)IMK)'
                         ],
        xMin           : 38,
        xMax           : 552.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 590.5
      };
      font["Y"]        = {
        sC             : [
                           'D??E?? D??A?? D??AEECA4EgA4 F$A4F2A`F2A?? F2E?? ITJ4 I]JBIiJQIiJh IiJ??I?K)I#K) H??K)H~J??HbJ?? EgF?? BjJ?? BZJ??BFK)B)K) A??K)AfJ??AfJh AfJQAqJBAyJ4'
                         ],
        xMin           : 17.5,
        xMax           : 531,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 549.5
      };
      font["Z"]        = {
        sC             : [
                           'B"AB I!AB IoABI{AlI{A?? I{B@ISBNI!BN C[BN I{I?? I{J?? B|J?? B;J??A??J??A??JU A??I??BHI??B|I?? HFI?? B"B>'
                         ],
        xMin           : 47.5,
        xMax           : 540,
        yMin           : 0,
        yMax           : 621,
        wdth           : 587.5
      };
      font["0"]        = {
        sC             : [
                           'J.Cw J.Hh J.J$H??K$G3K$ EQK$ CwK$BVJ$BVHh BVCw BVB9CwA8EQA8 G3A8 H??A8J.B9J.Cw'
                         ],
        hC             : [
                           ['CdH?? CdIAD5I??E;I?? GII?? HPI??I!IAI!H?? I!C[ I!B??HPBDGIBD E;BD D5BDCdB??CdC[']
                         ],
        xMin           : 74,
        xMax           : 566,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 640.5
      };
      font["1"]        = {
        sC             : [
                           'C#I?? C#A?? C#A^C4A4CkA4 C??A4D1A^D1A?? D1K1 D1KkC??K|CiK| CMK|C:KqC%K_ B/Jj A??JJA??J4A??J% A??I??A??ImBNIm BcImB|IuB??I??'
                         ],
        xMin           : 37,
        xMax           : 183.5,
        yMin           : -7,
        yMax           : 668.5,
        wdth           : 269.5
      };
      font["2"]        = {
        sC             : [
                           'I??H< I??JlHnK$FLK$ C??K$ B??K$B>JfB>I7 B>HnBiH`B??H` C=H`CKH??CKI7 CKI??C^I??C??I?? FLI?? H6I??H??I??H??H8 H??F)B>E??B>B& B>A8 I=A8 I??A8I??AbI??A} I??B7IoBDI=BD CKBD CqE?I??E^I??H<'
                         ],
        xMin           : 62,
        xMax           : 553.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 614
      };
      font["3"]        = {
        sC             : [
                           'F??I?? HYI??H??IIH??HP H??GUG5F??E??F?? EaF??E5FxE5F> E5E??E`EwE??Ew G*EwH??D??H??C?? H??B??HYBDF??BD EMBD DFBDCGBvCGC* CGCgC,C??B??C?? BVC??B;CfB;C# B;B+CGA8E?A8 FhA8 H??A8I??A??I??D3 I??D??H??E??H6F> H??FjI??GMI??H+ I??J<H??K$FhK$ E?K$ CGK$B;J2B;I7 B;HlBgH`B??H` C,H`CGHxCGI3 CGIiDJI??EMI??'
                         ],
        xMin           : 60.5,
        xMax           : 552.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 621
      };
      font["4"]        = {
        sC             : [
                           'H??C{ I7C{IeC??IeD@ IeDzI7D??H??D?? H8D?? H8K$ F??K$ A??D?? A??C{ G#C{ G#A?? G#AMGGA4GsA4 G??A4H8A@H8A?? H8C{'
                         ],
        hC             : [
                           ['G#D?? C#D?? G#Iu']
                         ],
        xMin           : 33,
        xMax           : 529,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 563
      };
      font["5"]        = {
        sC             : [
                           'B??CU BeCUB=C8B=B?? B=A??DjA0E??A0 H6A0I??B_I??D?? I??F??G??H.F:H. C`H. CkI? CsI??C??I??D@I?? H^I?? H??I??I/JBI/J^ I/J??H??K$H^K$ DPK$ C0K$BiJfBZI! BHG! FLG! G;G!HvFbHvD?? HvC;G??B=E??B= D-B=C0CUB??CU'
                         ],
        xMin           : 61.5,
        xMax           : 543.5,
        yMin           : -9,
        yMax           : 625.5,
        wdth           : 593.5
      };
      font["6"]        = {
        sC             : [
                           'B"Dc B"BeCkA0E??A0 H2A0I}BeI}Dd I}FfH2G??E??G?? E#G??D>G??CqGQ D<H??EEIsF8J$ FHJ,FtJBFtJl FtJ??FTK+E??K+ ECK+B"I+B"Dc'
                         ],
        hC             : [
                           ['C0Dd C0E??D)F??E??F?? GwF??HpE??HpDd HpC2GuB=E??B= D+B=C0C2C0Dd']
                         ],
        xMin           : 48.5,
        xMax           : 541,
        yMin           : -9,
        yMax           : 628.5,
        wdth           : 580
      };
      font["7"]        = {
        sC             : [
                           'D??A. EMA.EcAUEmAm I)JB I/JWI1JhI1Jp I1J??H??K/HlK/ CSK/ BBK/A}JpA}IA A}HvB&HjBBHj B|HjB??H??B??IA B??I??B??J"CdJ" G??J" DZA?? DTA??DLA??DLAo DLA<D??A.D??A.'
                         ],
        xMin           : 29,
        xMax           : 503.5,
        yMin           : -10,
        yMax           : 630.5,
        wdth           : 527
      };
      font["8"]        = {
        sC             : [
                           'J(C?? J(D??I??E}I=F> I??FrJ(GQJ(HT J(J??HlK$F`K$ E??K$ C??K$BPJ??BPHT BPGQBtFtC=F> BpE??BPD??BPC?? BPAoC}A8E??A8 F`A8 H??A8J(AqJ(C??'
                         ],
        hC             : [
                           ['C^C?? C^EiD/E}E??E} F`E} HLE}H??EiH??C?? H??BVHLBDF`BD E??BD D+BDC^BXC^C??','H??HP H??F??HTF??F`F?? E??F?? D)F??C^F??C^HP C^I??D+I??E??I?? F`I?? HVI??H??I??H??HP']
                         ],
        xMin           : 71,
        xMax           : 563,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 634.5
      };
      font["9"]        = {
        sC             : [
                           'A??HP A??E??DfE}F"E} F??E}GqE??H:F) GUC=D??B1CwB1 C6B1C%A??C%Al C%AGC:A!CwA! FxA!ImC??ImHP ImJbG??K$F"K$ D??K$A??J??A??HP'
                         ],
        hC             : [
                           ['F"I?? G??I??H`IIH`HP H`GYG??F??F"F?? DlF??B??F??B??HP B??I??D??I??F"I??']
                         ],
        xMin           : 41,
        xMax           : 533,
        yMin           : -16,
        yMax           : 625.5,
        wdth           : 581
      };
      font["!"]        = {
        sC             : [
                           'C??DB C??Jv C??K9C[KIC?KI C#KIBzK9BzJv BzDB BzC}C!CoC=Co CfCoC??C??C??DB',
                           'C?B_ B??B_BHB7BHA{ BHA<B??@??C?@?? Cu@??D8A>D8A{ D8B;CmB_C?B_'
                         ],
        xMin           : 67,
        xMax           : 187,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 253.5
      };
      font["|"]        = {
        sC             : [
                           'CmA?? CmJY CmJ??CAK)C%K) B??K)BaJ??BaJY BaA?? BaABB??A4C#A4 C^A4CmA^CmA??'
                         ],
        xMin           : 79,
        xMax           : 149,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 229
      };
      font['"']        = {
        sC             : [
                           'BLJt BLHP BLG??BvG}B??G} C,G}CWG??CWHP CWJt CWK9C.KGB??KG BxKGBLK7BLJt',
                           'C??Jt C??HP C??G??D:G}DVG} D~G}D??G??D??HP D??Jt D??K7DtKGDXKG D<KGC??K7C??Jt'
                         ],
        xMin           : 69,
        xMax           : 238,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 306.5
      };
      font["'"]        = {
        sC             : [
                           'BLJt BLHP BLG??BvG}B??G} C,G}CWG??CWHP CWJt CWK9C.KGB??KG BxKGBLK7BLJt'
                         ],
        xMin           : 69,
        xMax           : 138.5,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 207
      };
      font["#"]        = {
        sC             : [
                           'E??H) F??J8 F??JHF??JWF??J` F??J??FjK"F>K" E??K"E??J??EyJj D??H) C#H) BcH)BRG??BRGe BRG,B|F??C#F?? DRF?? C??EA BjEA B$EAA??D??A??D| A??DaB$D5BjD5 COD5 BjB$ BgA??BeA??BeA?? BeAUB??A:C(A: CSA:CfA[CqAu DdD5 F-D5 EEB& EAA??E?A??E?A?? E?AUE^A:E??A: F1A:FBA[FNAu GAD5 H??D5 IaD5IoD_IoDz IoD??IVEAH??EA GuEA HDF?? IVF?? I??F??J*GGJ*Gc J*G??I??H)IVH) HxH) I]J6 IaJFIcJPIcJ^ IcJ??IGK"H??K" HrK"H^J??HTJj GaH)'
                         ],
        hC             : [
                           ['EgF?? G.F?? F^EA D??EA']
                         ],
        xMin           : 41.5,
        xMax           : 564,
        yMin           : -4,
        yMax           : 624.5,
        wdth           : 607
      };
      font["$"]        = {
        sC             : [
                           'C??Bg EmBg EmA?? EmABE??A4F-A4 FlA4FzA[FzA?? FzBg G??Bg IIBgI??CMI??Dp I??EyIaF??G??F?? FzF?? FzHv H0Hv HvHvH??HhH??G?? H??GYI/GIIOGI IyGII??GcI??G?? I??H??I{I??H>I?? FzI?? FzJ[ FzJ??FNK)F/K) E??K)EmJ??EmJY EmI?? DJI?? BpI??B9H??B9G?? B9F??BrE{DJE{ EmE{ EmCs C??Cs C`CsCEC??CEDR CED|C6E!B??E! BgE!B9D??B9DN B9C[BTBgC??Bg'
                         ],
        hC             : [
                           ['D$F?? CqF??CEG3CEG?? CEHdCfHvD$Hv EmHv EmF??','H)E{ H`E{H??E?H??Dd H??C??HrCsH)Cs FzCs FzE{']
                         ],
        xMin           : 59.5,
        xMax           : 553.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 613
      };
      font["%"]        = {
        sC             : [
                           'H??II HpIIHYI9HLI- BeC?? BPCwBDCfBDCK BDB??BnB??B??B?? B??B??C*B??CEC! I-HH I7HRIKHnIKH?? IKI/I!IIH??II',
                           'B]HF B]GcC,F??C??F?? D|F??EYGcEYHF EYI#D|IqC??Iq C,IqB]I#B]HF',
                           'F6D& F6CCF??BtG??Bt HdBtI3CCI3D& I3D??HdE[G??E[ F??E[F6D??F6D&'
                         ],
        hC             : [
                           [],
                           ['CkHF CkHVC}HdC??Hd C??HdD8HWD8HF D8H.C??G??C??G?? C??G??CkH.CkHF'],
                           ['GYD& GYD<GmDNG??DN G??DNH&D>H&D& H&C??G??C??G??C?? GmC??GYC??GYD&']
                         ],
        xMin           : 65,
        xMax           : 516.5,
        yMin           : 88.5,
        yMax           : 535,
        wdth           : 583
      };
      font["&"]        = {
        sC             : [
                           'C.F?? B;F"A??D??A??D$ A??A{C??@??E=@?? E??@??F??A6GUA?? G??A> H$A#H>@??HW@?? Hj@??H??A#H??AW H??AfH??A{H??A?? H2Bg HhC4H??C??H??D~ H??EKH`EWHDEW G??EWG}E,G}D~ G}D>GoC??GSCW C??GU CdG??CSHDCSHd CSIuDJJBE2JB F:JBF>H??F??H?? GAH??G_I#G_II G_IuFrKNE2KN C??KNBBJBBBHd BBG??B~G3C.F??'
                         ],
        hC             : [
                           ['F|Bj F>B7EwA??E=A?? DLA??B??BTB??D$ B??D??C?EaC??E??']
                         ],
        xMin           : 40,
        xMax           : 490,
        yMin           : -23.5,
        yMax           : 646,
        wdth           : 521
      };
      font["("]        = {
        sC             : [
                           'DvA` CfA`C^AdC^CE C^H?? C^J}CfJ??DvJ?? DvK?? CIK??BPK??BPH?? BPCE BP@XCI@RDv@R'
                         ],
        xMin           : 71,
        xMax           : 217.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font[")"]        = {
        sC             : [
                           'A??A` A??@R CK@RDD@XDDCE DDH?? DDK??CKK??A??K?? A??J?? C0J??C8J}C8H?? C8CE C8AdC0A`A??A`'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font["*"]        = {
        sC             : [
                           'D??F?? D??G?? E??GKE??GCF+GC F`GCFpG{FpG?? FpH)FXH<FBHJ EeH?? FBI7 FXIEFpIXFpI{ FpI??FTJ>F+J> E??J>E??J<D??I} D??Jf D??K+DtK9DXK9 D1K9C??K!C??Jf C??I} C!J6B??J>B??J> BLJ>B>I??B>I{ B>I_BNIGBlI7 CIH?? BjHJ BNH:B>H"B>G?? B>GiBZGCB??GC B??GCB??GEC??G?? C??F?? C??FXD:FHDVFH DrFHD??FXD??F??'
                         ],
        xMin           : 62,
        xMax           : 342.5,
        yMin           : 323,
        yMax           : 635.5,
        wdth           : 405
      };
      font["+"]        = {
        sC             : [
                           'D??D< D??Aj D??ACD??@??EG@?? E??@??E??ACE??Aj E??D< H6D< HhD<H??DXH??D?? H??E0HlEKH6EK E??EK E??G?? E??HdEeHrEIHr E!HrD??HYD??G?? D??EK BTEK A??EKA??D??A??D?? A??DcA??D<BTD<'
                         ],
        xMin           : 33,
        xMax           : 485,
        yMin           : -21.5,
        yMax           : 471.5,
        wdth           : 518.5
      };
      font[","]        = {
        sC             : [
                           'B??@C CmAf CwAyC{A??C{A?? C{BLC(BVB??BV B|BVBaBFBRA?? B"@p A??@eA??@TA??@L A?????B;???B]??? B?????B??@&B??@C'
                         ],
        xMin           : 45.5,
        xMax           : 156,
        yMin           : -93,
        yMax           : 74,
        wdth           : 220.5
      };
      font["-"]        = {
        sC             : [
                           'F??EK B??EK BcEKBPD??BPD?? BPDcBeD<B??D< F??D< G/D<GUDXGUD?? GUE0G3EKF??EK'
                         ],
        xMin           : 71,
        xMax           : 393.5,
        yMin           : 189,
        yMax           : 260.5,
        wdth           : 464.5
      };
      font["."]        = {
        sC             : [
                           'C6@?? Cd@??D-A<D-A{ D-B7CfB_C6B_ B??B_B>B9B>A{ B>A>B??@??C6@??'
                         ],
        xMin           : 62,
        xMax           : 181.5,
        yMin           : -21.5,
        yMax           : 78,
        wdth           : 244
      };
      font["/"]        = {
        sC             : [
                           'B??AM F<JB FDJUFNJ??FNJ?? FNK=E??KKE??KK E^KKEKK&EAJ?? B&B) A??A??A??AhA??AW A??A!BD@??BX@?? B??@??B??A:B??AM'
                         ],
        xMin           : 40,
        xMax           : 326,
        yMin           : -22.5,
        yMax           : 644.5,
        wdth           : 366
      };
      font[":"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G?? D>HLCwHtCGHt B??HtBPHNBPG?? BPGSB??G,CGG,',
                           'CGA{ CuA{D>A??D>B_ D>B??CwCACGCA B??CABPB??BPB_ BPA??B??A{CGA{'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : 28,
        yMax           : 472.5,
        wdth           : 261.5
      };
      font[";"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G?? D>HLCwHtCGHt B??HtBPHNBPG?? BPGSB??G,CGG,',
                           'C`A% D-BH D7B]D:BjD:Bv D:C0CiC:CWC: C;C:B??C*B??B~ BeAS BcAGB_A8B_A0 B_@??B|@mB??@m C?@mCS@??C`A%'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : -43,
        yMax           : 472.5,
        wdth           : 264.5
      };
      font["<"]        = {
        sC             : [
                           'B-E?? GuBn G??BaG??B]H)B] H^B]HlB??HlC# HlCAHWCSH:Cf CSFL H:I/ HLI7HlITHlIw HlI??HLJ6H&J6 G??J6G??J.GwJ% B-F?? A??F|A??FfA??FL A??F:A??E??B-E??'
                         ],
        xMin           : 32,
        xMax           : 468.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["="]        = {
        sC             : [
                           'F??F- C,F- BnF-B]E??B]Eg B]ECBpD??C,D?? F??D?? G;D??GaE9GaEc GaE??G?F-F??F-',
                           'F??Gw C,Gw BnGwB]GKB]G/ B]F??BpFhC,Fh F??Fh G;FhGaF??GaG, GaGZG?GwF??Gw'
                         ],
        xMin           : 77,
        xMax           : 399,
        yMin           : 238,
        yMax           : 410,
        wdth           : 476.5
      };
      font[">"]        = {
        sC             : [
                           'H??E?? I%E??I/F:I/FL I/FfI!F|H??F?? C;J% C0J.B??J6B??J6 BgJ6BFI??BFIw BFITBgI7BxI/ G_FL BxCf BZCSBFCABFC# BFB??BTB]B??B] B??B]C*BaC=Bn'
                         ],
        xMin           : 66,
        xMax           : 502.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["?"]        = {
        sC             : [
                           'DxD< DxC{E!CiE=Ci EYCiE??CyE??D< E??E{ G#F& HjF^I+GAI+Ht I+I??H[KIFTKI E?KI C8KIA??J??A??HY A??G??B5G??BRG?? BnG??B??G??B??HY B??J*CgJ<E?J< FvJ< G??J<G??I=G??Ht G??G??GsGMG9G= DxFf',
                           'E=@?? Ek@??F4A<F4A{ F4B7EmB_E=B_ D??B_DFB9DFA{ DFA>D??@??E=@??'
                         ],
        xMin           : 36,
        xMax           : 500.5,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 540
      };
      font["@"]        = {
        sC             : [
                           'BHGE BHD?? BHB_CwA#E}A# G??A# IKA#IiA??IiB?? IiC^I=CkH??Ck HjCkH[C?H[B?? H[BHHJB1G??B1 E}B1 D3B1CUC:CUD?? CUGE CUI#D3J,E}J, F4J, G}J,H[I#H[GE H[E??HLEcG??EK H)EoH+E??H+FJ H+G??GwH|E??H| DJH|C??G??C??FJ C??D??DJC??E??C?? IOC??IiEKIiGE IiI??H:K9F4K9 E}K9 CwK9BHI??BHGE'
                         ],
        hC             : [
                           ['E??E# E0E#E!E?E!FJ E!GSE0GoE??Go F??GoF??GQF??FJ F??EAF??E#E??E#']
                         ],
        xMin           : 67,
        xMax           : 531,
        yMin           : -15,
        yMax           : 635.5,
        wdth           : 597.5
      };
      font["["]        = {
        sC             : [
                           'CmA` CmJ?? D??J?? D??K?? BaK?? Ba@R D??@R D??A`'
                         ],
        xMin           : 79,
        xMax           : 225.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["]"]        = {
        sC             : [
                           'C8A` A??A` A??@R DD@R DDK?? A??K?? A??J?? C8J??'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["^"]        = {
        sC             : [
                           'B??Fn C8FnCIF??CUG! DtI?? E??G! E??F??F-FnFZFn F??FnF??F??F??G. F??G9F??GAF??GM E9K9 D-K9 BNGM BJGABJG7BJG. BJF??BjFnB??Fn'
                         ],
        xMin           : 68,
        xMax           : 364,
        yMin           : 341.5,
        yMax           : 635.5,
        wdth           : 432.5
      };
      font["_"]        = {
        sC             : [
                           'H+A` AyA` A2A`A#A6A#@?? A#@tA<@RAy@R H+@R Hr@RH??@|H??@?? H??A>HhA`H+A`'
                         ],
        xMin           : -15,
        xMax           : 478.5,
        yMin           : -56,
        yMax           : 14.5,
        wdth           : 463.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 253.5
      };

      return font;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS 
//
//

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var wgd={reverseHoles:false,reverseShapes:true},nbsp="\u00A0";
      wgd["A"]                     = {
        xMin                       : -7,
        xMax                       : 675,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 667
      };
      wgd["B"]                     = {
        xMin                       : 76,
        xMax                       : 667,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 704
      };
      wgd["X"]                     = {
        xMin                       : -3,
        xMax                       : 651,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 648
      };
      wgd["Y"]                     = {
        xMin                       : -6,
        xMax                       : 654,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 648
      };
      wgd["Z"]                   = {
    // textChinese9300           = {
        shapeCmds                : [
                                      [[567,-22],[622,7],[663,-46.5,694,-96.5],[633.5,-128.5],[606,-78,567,-22]],
                                      [[320,-17.5],[378.5,7],[414,-50.5,440,-104.5],[375.5,-131.5],[353.5,-77,320,-17.5]],
                                      [[831,-17.5],[883.5,18],[934.5,-38,976.5,-93.5],[918.5,-134.5],[882.5,-78,831,-17.5]],
                                      [[131.5,20.5],[188,-13.5],[140.5,-80,87.5,-139.5],[34,-97.5],[87.5,-43.5,131.5,20.5]],
                                      [[625.5,526.5],[625.5,762],[696,762],[696,526.5],[625.5,526.5]],
                                      [[835.5,812],[906,812],[906,511],[905,423,811.5,421],[754.5,419,670.5,421],[665,455.5,657,490.5],[739,485.5,783,485.5],[835.5,485.5,835.5,537.5],[835.5,812]],
                                      [[67,263],[218.5,327.5,322,411.5],[273,411.5],[273,553],[192,472,69,408.5],[46.5,436,23,463],[166,524.5,253.5,605.5],[56.5,605.5],[56.5,661.5],[273,661.5],[273,729.5],[180.5,726,88.5,723],[86.5,730.5,76,777.5],[312,784.5,517.5,799],[529,743.5],[434.5,737.5,341.5,732.5],[341.5,661.5],[551.5,661.5],[551.5,605.5],[341.5,605.5],[341.5,561],[372,591],[459.5,548,547.5,502],[508.5,452.5],[428.5,497.5,341.5,543],[341.5,427],[357,441.5,373,456.5],[456,456.5],[431.5,430,405,405.5],[728.5,405.5],[728.5,358.5],[673.5,297],[856,297],[856,20],[161,20],[161,235.5],[135.5,223,110,210],[90.5,238.5,67,263]]
                                   ],
        holeCmds                 : [
                                      [],
                                      [],
                                      [],
                                      [],
                                      [],
                                      [],
                                      [
                                         [[226.5,134],[226.5,70.5],[475.5,70.5],[475.5,134],[226.5,134]],
                                         [[790,183],[790,246.5],[541,246.5],[541,183],[790,183]],
                                         [[541,70.5],[790,70.5],[790,134],[541,134],[541,70.5]],
                                         [[226.5,246.5],[226.5,183],[475.5,183],[475.5,246.5],[226.5,246.5]],
                                         [[596.5,297],[646,356.5],[347.5,356.5],[309.5,325.5,264.5,297],[596.5,297]]
                                      ]
                                   ],
        xMin                     : 23,
        xMax                     : 976.5,
        yMin                     : -139.5,
        yMax                     : 812,
        wdth                     : 999.5
      };
      wgd["a"]                     = {
        shapeCmds                  : [
                                        [
                                          [0,0],
                                          [0,  (36.4-20.6),(23.6-23.6), (36.4-6.4), (14.3-23.6) ,36.4,-23.6],
                                          [0,  3,1.2],
                                          [0,  (3-1.3) ,(3.1-2.5), (3+0.3) ,  (1.7-2.5),         3,-2.5],
                                          [0,  -2.7,-13.3],
                                          [0,  -0.3,-1.6,-2.2,-2.3,-3.5,-1.3],
                                          [0,  -10.9,8.1],
                                          [0,  -1.4,1,-1.1,3.2,0.5,3.9],
                                          [0,  2.9,1.1],
                                          [0,  -3.7,8,-10.5,14,-18.6,16.7],
                                          [0,  -3,1,-6.1,-1.2,-6.1,-4.4],
                                          [0,  0,-33.4],
                                          [0,  12.5,0],
                                          [0,  2.1,0,4.1,-1.5,4.3,-3.7],
                                          [0,  0.2,-2.4,-1.7,-4.5,-4.1,-4.5],
                                          [0,  -12.5,0],
                                          [0,  0,-11],
                                          [0,  6,-1.8,10.4,-7.4,10.3,-14],
                                          [0,  -0.1,-7.6,-6.4,-13.9,-14,-14.2],
                                          [0,  -8.1,-0.2,-14.8,6.3,-14.8,14.4],
                                          [0,  0,6.5,4.4,12,10.3,13.8],
                                          [0,  0,11],
                                          [0,  -12.5,0],
                                          [0,  -2.1,0,-4.1,1.5,-4.3,3.7],
                                          [0,  -0.2,2.4,1.7,4.5,4.1,4.5],
                                          [0,  12.8,0],
                                          [0,  0,33.4],
                                          [0,  0,3.2,-3.1,5.4,-6.1,4.4],
                                          [0,  -8.1,-2.8,-14.9,-8.7,-18.6,-16.7],
                                          [0,  2.9,-1.1],
                                          [0,  1.6,-0.6,1.9,-2.8,0.5,-3.9],
                                          [0,  -10.9,-8.1],
                                          [0,  -1.3,-1,-3.2,-0.3,-3.5,1.3],
                                          [0,  -2.7,13.3],
                                          [0,  -0.3,1.7,1.3,3.1,3,2.5],
                                          [0,  3,-1.2],
                                          [0,  6.4,14.3,20.6,23.6,36.4,23.6]
                                        ]
                                     ],
        holeCmds                   : [
                                        [
                                          (function(r){
                                            return [
                                              [0,-72.5],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(1.6)
                                        ]
                                     ],
        reverseShape               : false,
        reverseHole                : false,
        xFactor                    : 7,
        yFactor                    : -7,
        xShift                     : 350,          // These values are not calibrated
        xMin                       : -340,         // Refer to the next symbol for an example
        xMax                       : 340,
        yMin                       : 47,
        yMax                       : 806,
        wdth                       : 700,
        show                       : true
      };
      wgd["??"]                     = {
        shapeCmds                  : [
                                        [
                                          [0,0],
                                          [0,  (36.4-20.6),(23.6-23.6), (36.4-6.4), (14.3-23.6) ,36.4,-23.6],
                                          [0,  3,1.2],
                                          [0,  (3-1.3) ,(3.1-2.5), (3+0.3) ,  (1.7-2.5),         3,-2.5],
                                          [0,  -2.7,-13.3],
                                          [0,  -0.3,-1.6,-2.2,-2.3,-3.5,-1.3],
                                          [0,  -10.9,8.1],
                                          [0,  -1.4,1,-1.1,3.2,0.5,3.9],
                                          [0,  2.9,1.1],
                                          [0,  -3.7,8,-10.5,14,-18.6,16.7],
                                          [0,  -3,1,-6.1,-1.2,-6.1,-4.4],
                                          [0,  0,-33.4],
                                          [0,  12.5,0],
                                          [0,  2.1,0,4.1,-1.5,4.3,-3.7],
                                          [0,  0.2,-2.4,-1.7,-4.5,-4.1,-4.5],
                                          [0,  -12.5,0],
                                          [0,  0,-11],
                                          [0,  6,-1.8,10.4,-7.4,10.3,-14],
                                          [0,  -0.1,-7.6,-6.4,-13.9,-14,-14.2],
                                          [0,  -8.1,-0.2,-14.8,6.3,-14.8,14.4],
                                          [0,  0,6.5,4.4,12,10.3,13.8],
                                          [0,  0,11],
                                          [0,  -12.5,0],
                                          [0,  -2.1,0,-4.1,1.5,-4.3,3.7],
                                          [0,  -0.2,2.4,1.7,4.5,4.1,4.5],
                                          [0,  12.8,0],
                                          [0,  0,33.4],
                                          [0,  0,3.2,-3.1,5.4,-6.1,4.4],
                                          [0,  -8.1,-2.8,-14.9,-8.7,-18.6,-16.7],
                                          [0,  2.9,-1.1],
                                          [0,  1.6,-0.6,1.9,-2.8,0.5,-3.9],
                                          [0,  -10.9,-8.1],
                                          [0,  -1.3,-1,-3.2,-0.3,-3.5,1.3],
                                          [0,  -2.7,13.3],
                                          [0,  -0.3,1.7,1.3,3.1,3,2.5],
                                          [0,  3,-1.2],
                                          [0,  6.4,14.3,20.6,23.6,36.4,23.6]
                                        ],
                                        (function(r){
                                          return [
                                            [0,r*1.4],
                                            [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                            [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                            [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                            [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                          ]})(13)
                                     ],
        holeCmds                   : [
                                        [
                                          (function(r){
                                            return [
                                              [0,-72.5],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(1.6)
                                        ],
                                        [
                                          (function(r){
                                            return [
                                              [0,r*1.05],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(12)
                                        ]
                                     ],
        reverseShape               : false,
        reverseHole                : false,
        xFactor                    : 7,
        yFactor                    : -7,
        xShift                     : 475,
        yShift                     : -312.6,                // The middle is at the bottom reference -- a kludge
        xMin                       : 20,
        xMax                       : 950,
        yMin                       : -145.6,
        yMax                       : 894.4,
        wdth                       : 950,
        show                       : true
      };
      wgd["b"]                     = {
        xMin                       : 63,
        xMax                       : 575,
        yMin                       : -14,
        yMax                       : 714,
        wdth                       : 611
      };
      wgd["c"]                     = {
        xMin                       : 35,
        xMax                       : 523,
        yMin                       : -14,
        yMax                       : 531,
        wdth                       : 556
      };
      wgd["4"]                     = {
        xMin                       : 24,
        xMax                       : 522,
        yMin                       : 0,
        yMax                       : 700,
        wdth                       : 556
      };
      wgd["5"]                     = { 
        xMin                       : 34,
        xMax                       : 522,
        yMin                       : -14,
        yMax                       : 700,
        wdth                       : 556
      };
      wgd[nbsp]                    = {
        xMin                       : 31,
        xMax                       : 400,
        yMin                       : -4,
        yMax                       : 644,
        wdth                       : 278
      };
      wgd[" "]                     = wgd[nbsp];

      return wgd;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })
/******/ ]);