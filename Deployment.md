# Vergleich von verschiedenen Hosting-Lösung
In diesem Dokument vergleich wir drei verschiedene Hosting anbieter. 
Die von uns ausgewählten Hostinganbieter sind Netlify, Cloudflare und Github Pages.  
Diese werden in folgende Punkte verglichen:
- Maximale Site-Größe
- Bandbreite pro Monat
- Anzahl Builds / Monat
- Vorschau-Funktion bei Änderungen
- Eigene Domain / HTTPS
- Integrationen
- Upgrade-Möglichkeit (Erweiterbarkeit)

Wir haben uns für diese Bewertungspunkte entschiede, weil sie aus unserer Sicht die wichtigsten Anforderungen an einen Hostingdienst abdecken. 

## GitHub Pages
GitHub Pages ist ein Hostingdienst von GitHub welcher es ermöglicht statische Webseiten schnell und einfach driekt aus eienm Git-Repository zu veröffentlichen.  

Maximale Site-Grösse  
Die Maximale grösse des Repository ist 1GB
Bandbreite pro Monat  
Die Bandbreite pro Monat unterliegt einem Soft-Limit von 100 GB. Das bedeutet, dass es sich um eine empfohlene Obergrenze handelt. Wird diese überschritten, können die Konsequenzen von einer Benachrichtigung über eine Drosselung bis hin zur Sperrung reichen. 
Anzahl Builds / Monat  

Vorschau-Funktion bei Änderungen  

Eigene Domain / HTTPS  

Upgrade-Möglichkeit (Erweiterbarkeit)  

Integrationen  

*Quelle:https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages*
## Cloudflare

Maximale Site-Grösse  

Bandbreite pro Monat  

Anzahl Builds / Monat  

Vorschau-Funktion bei Änderungen  

Eigene Domain / HTTPS  

Upgrade-Möglichkeit (Erweiterbarkeit)  

Integrationen  
*Quelle:*
## Netlify
Maximale Site-Grösse  

Bandbreite pro Monat  

Anzahl Builds / Monat  

Vorschau-Funktion bei Änderungen  

Eigene Domain / HTTPS  

Upgrade-Möglichkeit (Erweiterbarkeit)  

Integrationen  
*Quelle:*


## Ausgangslage
Für das Hosting unserer statischen Website haben wir zunächst Netlify (https://www.netlify.com/) getestet. Allerdings zeigte sich schnell, dass unser gewählter Static Site Generator (SSG) mit Netlify nicht kompatibel war, wodurch das Deployment nicht wie gewünscht funktionierte.

## Empfehlung und Entscheidung
Unser Dozent Fabian Hirter empfahl uns, Cloudflare als Hosting-Lösung zu testen, da es sich dort besonders einfach und reibungslos umsetzen lässt.

Nach der Umsetzung dieser Empfehlung bestätigte sich seine Einschätzung:
- Das Deployment mit Cloudflare funktionierte direkt und ohne zusätzliche Anpassungen.
- Die Lösung erwies sich als benutzerfreundlich und ließ sich mit wenigen Schritten implementieren.

## Fazit
Basierend auf diesen Erfahrungen entschieden wir uns schließlich für Cloudflare, da es sich als schnelle, unkomplizierte und effiziente Lösung für unser Projekt herausstellte.
