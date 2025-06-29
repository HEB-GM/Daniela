# StaticSiteGenerator

Einleitend möchte ich darauf hinweisen, dass wir uns bereits für eine Lösung entschieden haben: **Eleventy**. Dieses SSG wurde uns zunächst im Unterricht vorgeschlagen und auch unabhängig davon von ChatGPT als die passendste Option hervorgehoben. Da wir nun jedoch die Gelegenheit erhalten haben, unsere Wahl noch einmal genauer zu begründen und mit anderen Lösungsansätzen zu vergleichen, nutzen wir diese Chance gerne. Im Folgenden stellen wir fünf beliebte Static Site Generatoren vor, erläutern deren Vor- und Nachteile, mit speziellem Augenmerk auf Anwenderfreundlichkeit und Markdown-Support und ziehen anschliessend ein abschliessendes Fazit.



## Fünf Static Site Generatoren, die wir untersucht haben

### 1. Eleventy  
**Beschreibung:** Ein schlanker JavaScript-SSG, der Markdown-First arbeitet und verschiedene Template-Sprachen (z. B. Nunjucks, Liquid) unterstützt.  
**Vorteile:**  
- Sehr einfache Einrichtung und Konfiguration ohne komplexe Abhängigkeiten  
- Native Markdown-Integration: `.md`-Dateien werden direkt in HTML umgewandelt, ganz ohne Zusatz-Plugins  
- Flexible Template-Engine, erlaubt Wiederverwendung von Bausteinen  
- Schnelle Build-Performance, ideal für kleine bis mittlere Sites  

**Nachteile:**  
- Kein integriertes Bild- oder Asset-Handling, hierfür sind zusätzliche Plugins nötig  
- Kleinere Community als bei einigen älteren Generatoren  



### 2. Jekyll  
**Beschreibung:** Ruby-basiertes SSG, standardmässig auf GitHub Pages verfügbar und auf Liquid-Templates aufbauend.  
**Vorteile:**  
- Native Markdown-Unterstützung: Markdown-Dateien mit Frontmatter werden automatisch geparst  
- Nahtlose Integration mit GitHub Pages, Deployment out-of-the-box  
- Umfangreiches Ökosystem mit vielen Themes und Plugins  
- Grosse Community und ausgereifte Dokumentation  

**Nachteile:**  
- Erfordert eine Ruby-Installation und Ruby-Kenntnisse  
- Relativ langsame Build-Geschwindigkeit bei vielen Seiten  
- Konfigurationsdateien (YAML, Gemfile) können Einsteiger überfordern  



### 3. Hugo  
**Beschreibung:** Go-basiertes Single-Binary-SSG mit Go-Templates.  
**Vorteile:**  
- Eingebauter Markdown-Support: Inhalte in `.md`-Dateien plus Frontmatter in TOML/YAML/JSON  
- Extrem schnelle Generierung, auch bei grosser Anzahl von Seiten  
- Keine zusätzlichen Laufzeitumgebungen nötig, nur eine ausführbare Datei  
- Stabile und konsistente Performance auf allen Plattformen  

**Nachteile:**  
- Go-Template-Syntax ist gewöhnungsbedürftig und weniger dynamisch als JavaScript-Templating  
- Eingeschränktere Plugin- oder Theme-Auswahl im Vergleich zu JS-Tools  



### 4. Gatsby  
**Beschreibung:** React-basiertes SSG mit integriertem GraphQL-Datenlayer und umfangreichem Plugin-Ökosystem.  
**Vorteile:**  
- Markdown-Support über offizielle Plugins (`gatsby-source-filesystem`, `gatsby-transformer-remark`)  
- Sehr mächtiges Ökosystem, viele Plugins für Bilder, SEO, CMS-Adapter  
- Automatische Performance-Optimierungen (Code-Splitting, Prefetching)  
- Moderne React-Entwicklung mit wiederverwendbaren Komponenten  

**Nachteile:**  
- Höherer Initialaufwand und steilere Lernkurve (Webpack, Babel, GraphQL-Schema)  
- Build-Zeiten können bei komplexen GraphQL-Abfragen und grossen Projekten ansteigen  



### 5. MkDocs  
**Beschreibung:** Python-basiertes Tool, primär für Dokumentations-Websites entwickelt, nutzt Markdown und themenbasierte Templates.  
**Vorteile:**  
- Rein Markdown-zentriert: Alle Inhalte als `.md`-Dateien, Einrichtung über eine einzige `mkdocs.yml`  
- Extrem einfache Einrichtung, Live-Reload-Server inklusive  
- Ideal für Dokumentations- und kleine Projektseiten ohne grossen Konfigurationsaufwand  

**Nachteile:**  
- Weniger flexibel für frei gestaltete Layouts oder komplexe Design-Anforderungen  
- Begrenztes Template-Ökosystem, hauptsächlich Doku-Templates  



## Fazit

Die verschiedenen Lösungen für ein Projekt dieser Grösse unterscheiden sich nicht dramatisch. Daher könnte man durchaus auch eine andere wählen. Wir haben uns für **Eleventy** entschieden, da wir bei der Umsetzung keine Probleme hatten und nicht auf eine andere Technologie wechseln mussten. Rückblickend wäre **MkDocs** vielleicht noch die einfachere Lösung gewesen. Trotzdem sind wir mit unserer Wahl sehr zufrieden. Aus Gründen der Transparenz: Wir haben die Quelle https://github.com/topics/static-site-generator verwendet. Doch um uns Zusammenfassungen der einzelnen Technologien erstellen zu lassen sowie zur Rechtschreibkorrektur kam **ChatGPT** zum Einsatz.
