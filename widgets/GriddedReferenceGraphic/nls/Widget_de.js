// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Gitternetz-Referenzgrafik",newGRGFromAreaButtonLabel:"Gitternetz aus einer Fl\u00e4che definieren",newGRGFromPointButtonLabel:"Gitternetz aus einem Punkt definieren",newGRGFromAreaTitle:"Gitternetz aus einer Fl\u00e4che definieren",newGRGFromPointTitle:"Gitternetz aus einem Punkt definieren",newGRGBySizeButtonLabel:"Nach Dimension",newGRGFromRefSystemButtonLabel:"Nach Bezugssystem",newGRGByTimeLabel:"Nach Zeit und Geschwindigkeit",
newGRGFromNonStandardButtonLabel:"Nicht standardm\u00e4\u00dfiges Gitternetz definieren",newGRGAreaBySizeTitle:"GRG aus einer Fl\u00e4che nach Dimension",newGRGAreaBySizeDefineAreaLabel:"GRG-Fl\u00e4che",addGRGAreaPolygonToolTip:"GRG-Fl\u00e4che mit Polygon zeichnen",addGRGAreaExtentToolTip:"GRG-Fl\u00e4che mit Ausdehnung zeichnen",rotation:"Gitterdrehung",numberRowsColumnsLabel:"Anzahl der Zeilen und Spalten festlegen",newGRGAreaByRefSystemTitle:"GRG aus einer Fl\u00e4che nach Bezugssystem",gridSize:"Gittergr\u00f6\u00dfe",
UTMZoneandBand:"Gitter-Zone","100000m":"100000\u00a0Meter","10000m":"10000\u00a0Meter","1000m":"1000\u00a0Meter","100m":"100\u00a0Meter","10m":"10\u00a0Meter",clipGrid:"Gitter auf GRG-Fl\u00e4che zuschneiden",newGRGAreaFromNonStandardTitle:"Neues GRG",newGRGPointBySizeTitle:"GRG aus Punkt nach Dimension",newGRGPointByRefSystemTitle:"GRG aus Punkt nach Bezugssystem",newGRGPointByTimeTitle:"GRG aus Punkt mit Zeit und Geschwindigkeit",time:"Zeit",rate:"Geschwindigkeit",hours:"Stunden",minutes:"Minuten",
seconds:"Sekunden",ftPerSec:"Fu\u00df/Sekunde",ftPerHour:"Fu\u00df/Stunde",kmPerSec:"Kilometer/Sekunde",kmPerHour:"Kilometer/Stunde",mPerSec:"Meter/Sekunde",mPerHour:"Meter/Stunde",miPerSec:"Meilen/Sekunde",miPerHour:"Meilen/Stunde",nMPerSec:"Seemeilen/Sekunde",nMPerHour:"Seemeilen/Stunde",settingsTitle:"Einstellungen",labelSettingsLabel:"Beschriftungseinstellungen",labelSettingsButtonLabel:"Beschriftungseinstellungen konfigurieren",gridSettingsLabel:"Gitter-Einstellungen",gridSettingsButtonLabel:"Gitter-Einstellungen konfigurieren",
transparency:"Transparenz",labelStyle:"Beschriftungs-Style",font:"Schriftart",textSize:"Textgr\u00f6\u00dfe",textColor:"Textfarbe",halo:"Halo",show:"Einblenden",lockSettings:"Einstellungen wurden vom Anwendungsbesitzer gesperrt",gridSettings:{cellShape:"Zellenform",cellUnits:"Zelleneinheiten",cellOutline:"Zellenumrisslinien-Einstellungen",cellFill:"Zellenf\u00fcllungs-Einstellungen",gridReferenceSystem:"Bezugssystem",gridDatum:"Datum: WGS84",labelStartPosition:"Beschriftungsursprung",labelType:"Beschriftungstyp",
labelDirection:"Beschriftungsrichtung",gridOrigin:"Grid-Ursprung","default":"Rechteck",hexagon:"Hexagon",miles:"Meilen",kilometers:"Kilometer",feet:"Fu\u00df",meters:"Meter",yards:"Yards","nautical-miles":"Seemeilen",lowerLeft:"Unten links",lowerRight:"Unten rechts",upperLeft:"Oben links",upperRight:"Oben rechts",center:"Zentriert",alphaNumeric:"Alphanumerisch",alphaAlpha:"Alpha-Alpha",numeric:"Numerisch",horizontal:"Horizontal",vertical:"Vertikal",MGRS:"MGRS",USNG:"USNG",showLabels:"Beschriftungen anzeigen"},
publishTitle:"GRG in Portal ver\u00f6ffentlichen",publishGRGBtn:"Ver\u00f6ffentlichen",GRGLayerName:"Name des ver\u00f6ffentlichten GRG-Layers",invalidGRGLayerName:"Der Layer-Name darf nur alphanumerische Zeichen und Unterstriche enthalten.",missingGRGLayerName:"Sie m\u00fcssen einen Namen f\u00fcr die GRG eingeben.",publishWorskpaceError:"FEHLER: Fehler beim \u00d6ffnen des Workspace",publishingFailedLayerExists:"Fehler beim Ver\u00f6ffentlichen: Sie verf\u00fcgen bereits \u00fcber einen Service mit dem Namen {0}. W\u00e4hlen Sie einen anderen Namen aus.",
checkService:"Service {0} \u00fcberpr\u00fcfen",createService:"Service {0} erstellen",unableToCreate:"{0} kann nicht erstellt werden",addToDefinition:"Zur Definition {0} hinzuf\u00fcgen",successfullyPublished:"Web-Layer wurde erfolgreich ver\u00f6ffentlicht{0}Web-Layer verwalten",userRole:"Der Service kann nicht erstellt werden, da dem Benutzer nicht die entsprechenden Berechtigungen zugewiesen sind.",createGRGBtn:"GRG erstellen",clearGRGBtn:"L\u00f6schen",labelFormat:"Beschriftungsformat",helpIconTooltip:"Z: Gitter-Zoneneinteilung (Grid Zone Designation, GZD)\nS: Identifikator f\u00fcr 100.000-Meter-Gitternetzquadrate\nX: Ostwert (X-Koordinate)\nY: Nordwert (Y-Koordinate)\n\nBeispiele:\nZSXY ist 15SWC8081751205\nZS X,Y ist 15SWC 80817,51205",
addPointToolTip:"GRG-Ursprung hinzuf\u00fcgen",cellWidth:"Zellenbreite (x)",cellHeight:"Zellenh\u00f6he (y)",invalidNumberMessage:"Der eingegebene Wert ist ung\u00fcltig",invalidRangeMessage:"Wert muss gr\u00f6\u00dfer als 0 sein",gridAngleInvalidRangeMessage:"Wert muss zwischen -89,9 und 89,9 liegen",formatIconTooltip:"Eingabe formatieren",coordInputLabel:"GRG-Ursprung",setCoordFormat:"Zeichenfolge f\u00fcr Koordinatenformat festlegen",prefixNumbers:'Positiven und negativen Zahlen ein "+/-"-Pr\u00e4fix hinzuf\u00fcgen',
cancelBtn:"Abbrechen",applyBtn:"Anwenden",comfirmInputNotation:"Eingegebene Schreibweise best\u00e4tigen",notationsMatch:"Die Schreibweisen entsprechen Ihrer Eingabe. Geben Sie an, welche Sie verwenden m\u00f6chten:",numberOfCellsHorizontal:"Anz. der horizontalen Zellen",numberOfCellsVertical:"Anz. der vertikalen Zellen",gridAngle:"Gitterdrehung",tooManyCellsErrorMessage:"Sie m\u00f6chten ein Gitternetz aus mehr als 2000 Zellen erstellen. Sie sollten die Anzahl der erstellten Zellen durch \u00c4ndern der Gittergr\u00f6\u00dfe oder -fl\u00e4che reduzieren.",
missingParametersMessage:"\x3cp\x3eDas GRG-Erstellungsformular enth\u00e4lt keine oder ung\u00fcltige Parameter. Stellen Sie Folgendes sicher:\x3c/p\x3e\x3cul\x3e\x3cli\x3eEs wurde eine GRG-Fl\u00e4che gezeichnet.\x3c/li\x3e\x3cli\x3eDie Zellenbreite und -h\u00f6he enthalten jeweils g\u00fcltige Werte.\x3c/li\x3e\x3c/ul\x3e",missingOriginParametersMessage:"\x3cp\x3eDas GRG-Erstellungsformular enth\u00e4lt keine oder ung\u00fcltige Parameter. Stellen Sie Folgendes sicher:\x3c/p\x3e\x3cul\x3e\x3cli\x3eEs wurde ein GRG-Ursprung festgelegt.\x3c/li\x3e\x3cli\x3eDie Zeit, Geschwindigkeit und Winkeleingaben enthalten g\u00fcltige Werte.\x3c/li\x3e\x3c/ul\x3e",
invalidWidthHeightParametersMessage:"\x3cp\x3eDas GRG-Erstellungsformular enth\u00e4lt keine oder ung\u00fcltige Parameter. Stellen Sie sicher, dass die Eingaben f\u00fcr die Zellenbreite und -h\u00f6he g\u00fcltige Werte enthalten.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eDas GRG-Erstellungsformular enth\u00e4lt keine oder ung\u00fcltige Parameter. Stellen Sie sicher, dass die Eingaben f\u00fcr die Anzahl der horizontalen und vertikalen Zellen g\u00fcltige Werte enthalten.\x3c/p\x3e",
drawPointToolTip:"Klicken Sie, um den GRG-Ursprungspunkt hinzuzuf\u00fcgen.",missingLayerNameMessage:"Sie m\u00fcssen einen g\u00fcltigen Layer-Namen eingeben, bevor Sie ihn ver\u00f6ffentlichen k\u00f6nnen.",parseCoordinatesError:"Koordinaten k\u00f6nnen nicht geparst werden. \u00dcberpr\u00fcfen Sie Ihre Eingabe.",grgPolarRegionError:"Die GRG-Ausdehnung befindet sich in einer Polarregion. Zellen, die in der Polarregion liegen, werden nicht erstellt.",grgPolarOriginError:"Der GRG-Ursprungspunkt darf nicht in einer Polarregion liegen, wenn eine GRG nach Bezugssystem erstellt wird.",
deleteBtn:"L\u00f6schen",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Dezimalgrad \u2013 Breitengrad/L\u00e4ngengrad",DDLongLatNotation:"Dezimalgrad \u2013 L\u00e4ngengrad/Breitengrad",DDMLatLongNotation:"Grad Dezimalminuten \u2013 Breitengrad/L\u00e4ngengrad",DDMLongLatNotation:"Grad Dezimalminuten \u2013 L\u00e4ngengrad/Breitengrad",DMSLatLongNotation:"Grad, Minuten, Sekunden \u2013 Breitengrad/L\u00e4ngengrad",
DMSLongLatNotation:"Grad, Minuten, Sekunden \u2013 L\u00e4ngengrad/Breitengrad",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM \u2013 Bandbuchstabe",UTMHemNotation:"UTM \u2013 Hemisph\u00e4re (N/S)",_localized:{}}});