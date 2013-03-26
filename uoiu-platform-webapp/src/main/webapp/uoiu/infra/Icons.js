define([
  'dijit/TitlePane',
  'dijit/layout/ContentPane', 'dijit/form/Button',
  'dojo/_base/declare',
  
  'dojo/domReady!'
], function(TitlePane, ContentPane, Button, declare) {

  return declare('uoiu.Icons', ContentPane, {
    postCreate : function() {
      this.inherited(arguments);

      /* Action icons */
      var toolbar1 = new TitlePane({
        title : "Action icons"
      });

      var btn1 = new Button({
        label : 'dijitIconSave', showLabel : true, iconClass : "dijitIconSave"
      })
      var btn2 = new Button({
        label : 'dijitIconPrint', showLabel : true,
        iconClass : "dijitIconPrint"
      })
      var btn3 = new Button({
        label : 'dijitIconCut', showLabel : true, iconClass : "dijitIconCut"
      })
      var btn4 = new Button({
        label : 'dijitIconCopy', showLabel : true, iconClass : "dijitIconCopy"
      })
      var btn5 = new Button({
        label : 'dijitIconClear', showLabel : true,
        iconClass : "dijitIconClear"
      })
      var btn6 = new Button({
        label : 'dijitIconDelete', showLabel : true,
        iconClass : "dijitIconDelete"
      })
      var btn7 = new Button({
        label : 'dijitIconUndo', showLabel : true, iconClass : "dijitIconUndo"
      })
      var btn8 = new Button({
        label : 'dijitIconEdit', showLabel : true, iconClass : "dijitIconEdit"
      })
      var btn9 = new Button({
        label : 'dijitIconNewTask', showLabel : true,
        iconClass : "dijitIconNewTask"
      })
      var btn10 = new Button({
        label : 'dijitIconEditTask', showLabel : true,
        iconClass : "dijitIconEditTask"
      })
      var btn11 = new Button({
        label : 'dijitIconEditProperty', showLabel : true,
        iconClass : "dijitIconEditProperty"
      })
      var btn12 = new Button({
        label : 'dijitIconTask', showLabel : true, iconClass : "dijitIconTask"
      })
      var btn13 = new Button({
        label : 'dijitIconFilter', showLabel : true,
        iconClass : "dijitIconFilter"
      })
      var btn14 = new Button({
        label : 'dijitIconConfigure', showLabel : true,
        iconClass : "dijitIconConfigure"
      })
      var btn15 = new Button({
        label : 'dijitIconSearch', showLabel : true,
        iconClass : "dijitIconSearch"
      })
      var btn16 = new Button({
        label : 'dijitIconError', showLabel : true,
        iconClass : "dijitIconError"
      })
      toolbar1.addChild(btn1);
      toolbar1.addChild(btn2);
      toolbar1.addChild(btn3);
      toolbar1.addChild(btn4);
      toolbar1.addChild(btn5);
      toolbar1.addChild(btn6);
      toolbar1.addChild(btn7);
      toolbar1.addChild(btn8);
      toolbar1.addChild(btn9);
      toolbar1.addChild(btn10);
      toolbar1.addChild(btn11);
      toolbar1.addChild(btn12);
      toolbar1.addChild(btn13);
      toolbar1.addChild(btn14);
      toolbar1.addChild(btn15);
      toolbar1.addChild(btn16);

      toolbar1.placeAt(this.domNode);

      /* Object icons */
      var toolbar2 = new TitlePane({
        title : "Object icons"
      });
      var btn17 = new Button({
        label : 'dijitIconApplication', showLabel : true,
        iconClass : "dijitIconApplication"
      })
      var btn18 = new Button({
        label : 'dijitIconBookmark', showLabel : true,
        iconClass : "dijitIconBookmark"
      })
      var btn19 = new Button({
        label : 'dijitIconChart', showLabel : true,
        iconClass : "dijitIconChart"
      })
      var btn20 = new Button({
        label : 'dijitIconConnector', showLabel : true,
        iconClass : "dijitIconConnector"
      })
      var btn21 = new Button({
        label : 'dijitIconDatabase', showLabel : true,
        iconClass : "dijitIconDatabase"
      })
      var btn22 = new Button({
        label : 'dijitIconDocuments', showLabel : true,
        iconClass : "dijitIconDocuments"
      })
      var btn23 = new Button({
        label : 'dijitIconMail', showLabel : true, iconClass : "dijitIconMail"
      })
      var btn24 = new Button({
        label : 'dijitIconFile', showLabel : true, iconClass : "dijitIconFile"
      })
      var btn241 = new Button({
        label : 'dijitLeaf', showLabel : true, iconClass : "dijitLeaf"
      })
      var btn25 = new Button({
        label : 'dijitIconFunction', showLabel : true,
        iconClass : "dijitIconFunction"
      })
      var btn26 = new Button({
        label : 'dijitIconKey', showLabel : true, iconClass : "dijitIconKey"
      })
      var btn27 = new Button({
        label : 'dijitIconPackage', showLabel : true,
        iconClass : "dijitIconPackage"
      })
      var btn28 = new Button({
        label : 'dijitIconSample', showLabel : true,
        iconClass : "dijitIconSample"
      })
      var btn29 = new Button({
        label : 'dijitIconTable', showLabel : true,
        iconClass : "dijitIconTable"
      })
      var btn30 = new Button({
        label : 'dijitIconUsers', showLabel : true,
        iconClass : "dijitIconUsers"
      })

      toolbar2.addChild(btn17);
      toolbar2.addChild(btn18);
      toolbar2.addChild(btn19);
      toolbar2.addChild(btn20);
      toolbar2.addChild(btn21);
      toolbar2.addChild(btn22);
      toolbar2.addChild(btn23);
      toolbar2.addChild(btn24);
      toolbar2.addChild(btn241);
      toolbar2.addChild(btn25);
      toolbar2.addChild(btn26);
      toolbar2.addChild(btn27);
      toolbar2.addChild(btn28);
      toolbar2.addChild(btn29);
      toolbar2.addChild(btn30);

      toolbar2.placeAt(this.domNode);

      /* Tree folder icons */
      var toolbar3 = new TitlePane({
        title : "Tree folder icons"
      });
      var btn31 = new Button({
        label : 'dijitIconFolderClosed', showLabel : true,
        iconClass : "dijitIconFolderClosed"
      })
      var btn311 = new Button({
        label : 'dijitFolderClosed', showLabel : true,
        iconClass : "dijitFolderClosed"
      })
      var btn32 = new Button({
        label : 'dijitIconFolderOpen', showLabel : true,
        iconClass : "dijitIconFolderOpen"
      })
      var btn321 = new Button({
        label : 'dijitFolderOpened', showLabel : true,
        iconClass : "dijitFolderOpened"
      })
      toolbar3.addChild(btn31);
      toolbar3.addChild(btn311);
      toolbar3.addChild(btn32);
      toolbar3.addChild(btn321);

      toolbar3.placeAt(this.domNode);

      /* editor icons */
      var toolbar4 = new TitlePane({
        title : "editor icons"
      });

      var btn33 = new Button({
        label : 'dijitEditorIconSep', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSep"
      })
      var btn34 = new Button({
        label : 'dijitEditorIconSave', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSave"
      })
      var btn35 = new Button({
        label : 'dijitEditorIconPrint', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconPrint"
      })
      var btn36 = new Button({
        label : 'dijitEditorIconCut', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconCut"
      })
      var btn37 = new Button({
        label : 'dijitEditorIconCopy', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconCopy"
      })
      var btn38 = new Button({
        label : 'dijitEditorIconPaste', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconPaste"
      })
      var btn39 = new Button({
        label : 'dijitEditorIconDelete', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconDelete"
      })
      var btn40 = new Button({
        label : 'dijitEditorIconCancel', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconCancel"
      })
      var btn41 = new Button({
        label : 'dijitEditorIconUndo', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconUndo"
      })
      var btn42 = new Button({
        label : 'dijitEditorIconRedo', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconRedo"
      })
      var btn43 = new Button({
        label : 'dijitEditorIconSelectAll', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSelectAll"
      })
      var btn44 = new Button({
        label : 'dijitEditorIconBold', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconBold"
      })
      var btn45 = new Button({
        label : 'dijitEditorIconItalic', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconItalic"
      })
      var btn46 = new Button({
        label : 'dijitEditorIconUnderline', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconUnderline"
      })
      var btn47 = new Button({
        label : 'dijitEditorIconStrikethrough', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconStrikethrough"
      })
      var btn48 = new Button({
        label : 'dijitEditorIconSuperscript', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSuperscript"
      })

      var btn49 = new Button({
        label : 'dijitEditorIconSubscript', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSubscript"
      })
      var btn50 = new Button({
        label : 'dijitEditorIconJustifyCenter', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconJustifyCenter"
      })
      var btn51 = new Button({
        label : 'dijitEditorIconJustifyFull', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconJustifyFull"
      })
      var btn52 = new Button({
        label : 'dijitEditorIconJustifyLeft', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconJustifyLeft"
      })
      var btn53 = new Button({
        label : 'dijitEditorIconJustifyRight', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconJustifyRight"
      })
      var btn54 = new Button({
        label : 'dijitEditorIconIndent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconIndent"
      })
      var btn55 = new Button({
        label : 'dijitEditorIconOutdent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconOutdent"
      })
      var btn56 = new Button({
        label : 'dijitEditorIconListBulletIndent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconListBulletIndent"
      })
      var btn57 = new Button({
        label : 'dijitEditorIconListBulletOutdent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconListBulletOutdent"
      })
      var btn58 = new Button({
        label : 'dijitEditorIconListNumIndent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconListNumIndent"
      })
      var btn59 = new Button({
        label : 'dijitEditorIconListNumOutdent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconListNumOutdent"
      })
      var btn60 = new Button({
        label : 'dijitEditorIconTabIndent', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconTabIndent"
      })
      var btn61 = new Button({
        label : 'dijitEditorIconLeftToRight', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconLeftToRight"
      })
      var btn62 = new Button({
        label : 'dijitEditorIconRightToLeft', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconRightToLeft"
      })

      var btn63 = new Button({
        label : 'dijitEditorIconBackColor', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconBackColor"
      })
      var btn64 = new Button({
        label : 'dijitEditorIconForeColor', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconForeColor"
      })
      var btn65 = new Button({
        label : 'dijitEditorIconHiliteColor', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconHiliteColor"
      })
      var btn66 = new Button({
        label : 'dijitEditorIconNewPage', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconNewPage"
      })
      var btn67 = new Button({
        label : 'dijitEditorIconInsertImage', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconInsertImage"
      })
      var btn68 = new Button({
        label : 'dijitEditorIconInsertTable', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconInsertTable"
      })
      var btn69 = new Button({
        label : 'dijitEditorIconSpace', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconSpace"
      })
      var btn70 = new Button({
        label : 'dijitEditorIconInsertHorizontalRule', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconInsertHorizontalRule"
      })
      var btn71 = new Button({
        label : 'dijitEditorIconInsertOrderedList', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconInsertOrderedList"
      })
      var btn72 = new Button({
        label : 'dijitEditorIconInsertUnorderedList', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconInsertUnorderedList"
      })
      var btn73 = new Button({
        label : 'dijitEditorIconCreateLink', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconCreateLink"
      })
      var btn74 = new Button({
        label : 'dijitEditorIconUnlink', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconUnlink"
      })
      var btn75 = new Button({
        label : 'dijitEditorIconViewSource', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconViewSource"
      })
      var btn76 = new Button({
        label : 'dijitEditorIconRemoveFormat', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconRemoveFormat"
      })
      var btn77 = new Button({
        label : 'dijitEditorIconFullScreen', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconFullScreen"
      })
      var btn78 = new Button({
        label : 'dijitEditorIconWikiword', showLabel : true,
        iconClass : "dijitEditorIcon dijitEditorIconWikiword"
      })

      toolbar4.addChild(btn33);
      toolbar4.addChild(btn34);
      toolbar4.addChild(btn35);
      toolbar4.addChild(btn36);
      toolbar4.addChild(btn37);
      toolbar4.addChild(btn38);
      toolbar4.addChild(btn39);
      toolbar4.addChild(btn40);
      toolbar4.addChild(btn41);
      toolbar4.addChild(btn42);
      toolbar4.addChild(btn43);
      toolbar4.addChild(btn44);
      toolbar4.addChild(btn45);
      toolbar4.addChild(btn46);
      toolbar4.addChild(btn47);
      toolbar4.addChild(btn48);
      toolbar4.addChild(btn49);
      toolbar4.addChild(btn50);
      toolbar4.addChild(btn51);
      toolbar4.addChild(btn52);
      toolbar4.addChild(btn53);
      toolbar4.addChild(btn54);
      toolbar4.addChild(btn55);
      toolbar4.addChild(btn56);
      toolbar4.addChild(btn57);
      toolbar4.addChild(btn58);
      toolbar4.addChild(btn59);
      toolbar4.addChild(btn60);
      toolbar4.addChild(btn61);
      toolbar4.addChild(btn62);
      toolbar4.addChild(btn63);
      toolbar4.addChild(btn64);
      toolbar4.addChild(btn65);
      toolbar4.addChild(btn66);
      toolbar4.addChild(btn67);
      toolbar4.addChild(btn68);
      toolbar4.addChild(btn69);
      toolbar4.addChild(btn70);
      toolbar4.addChild(btn71);
      toolbar4.addChild(btn72);
      toolbar4.addChild(btn73);
      toolbar4.addChild(btn74);
      toolbar4.addChild(btn75);
      toolbar4.addChild(btn76);
      toolbar4.addChild(btn77);
      toolbar4.addChild(btn78);

      toolbar4.placeAt(this.domNode);
    }
  })

})