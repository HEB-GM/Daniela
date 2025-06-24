# Vergleich von verschiedenen Hosting-Lösung
In diesem Dokument vergleich wir drei verschiedene Hosting anbieter. 
Die von uns ausgewählten Hostinganbieter sind Netlify, Cloudflare Pages und Github Pages.  
Diese werden in folgende Punkte verglichen:
- Maximale Site-Größe
- Bandbreite pro Monat
- Vorschau-Funktion bei Änderungen
- Eigene Domain
- Integrationen
- Upgrade-Möglichkeit (Erweiterbarkeit)

Wir haben uns für diese Bewertungspunkte entschiede, weil sie aus unserer Sicht die wichtigsten Anforderungen an einen Hostingdienst abdecken. 

## GitHub Pages
GitHub Pages ist ein Hostingdienst von GitHub welcher es ermöglicht statische Webseiten schnell und einfach driekt aus einem Git-Repository zu veröffentlichen.  
#### Maximale Site-Grösse:  
Die Maximale grösse des Repository ist auf 1GB begrenzt. (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
#### Bandbreite pro Monat:  
Die Bandbreite pro Monat unterliegt einem Soft-Limit von 100 GB. Das bedeutet, dass es sich um eine empfohlene Obergrenze handelt. Wird diese überschritten, können die Konsequenzen von einer Benachrichtigung über eine Drosselung bis hin zur Sperrung reichen. (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
#### Vorschau-Funktion bei Änderungen:  
Beim Durchsuchen der Dokumentation gibt es keinen hinweis auf eine Vorschau funktion. Daher nehme ich an das diese Funktion nicht vorhanden ist.  
#### Eigene Domain:  
Ja es können eigene Domain verwendet werden. (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) 
#### Upgrade-Möglichkeit (Erweiterbarkeit):  
Es gibt keine spezifischen upgrades für GitHub Pages. Ein Upgrade von GitHub schaltet auch erweiterungen von GitHub Pages frei.  (https://github.com/pricing)
#### Integrationen:  
GitHub Pages unterstützt nur GitHub Repositorys.  
*Alle angaben wurden von folgender Quelle entnomen: https://docs.github.com/en/pages/getting-started-with-github-pages*

## Cloudflare Pages
Cloudflare Pages ist ein statischer Hostingdienst von Cloudflare, der es ermöglicht, Webseiten direkt aus einem Git-Repository zu veröffentlichen und global über bereitzustellen. Diese bieten automatischen Deployments und Vorschauversionen.  
#### Maximale Site-Grösse  
Die begrenzung liegt pro File auf 25MiB (Hinweis beim Hochladen).
#### Bandbreite pro Monat   
Keine Begrenzung gemäss der Webseite mit limits. (https://developers.cloudflare.com/pages/platform/limits/)
#### Vorschau-Funktion bei Änderungen  
Vorschaufunktion ist vorhanden (https://developers.cloudflare.com/pages/configuration/preview-deployments/)
#### Eigene Domain / HTTPS  
Eigene Domains können verwendet werden (https://developers.cloudflare.com/pages/configuration/custom-domains/)
#### Upgrade-Möglichkeit (Erweiterbarkeit)  
Stuffenweise Upgrade möglich (https://www.cloudflare.com/de-de/plans/)
#### Integrationen 
Unterstützt GitHub und GitLab (https://developers.cloudflare.com/pages/configuration/git-integration/)


## Netlify
Netlify ist eine moderne Hosting- und Entwicklungsplattform für statische und serverlose Webseiten. Dies ermöglicht, Inhalte direkt aus einem Git-Repository zu veröffentlichen und mit Funktionen wie Vorschau-Deployments zu erweitern.
#### Maximale Site-Grösse  
Die begrenzung liegt pro File auf 25MiB (Hinweis beim Hochladen).
#### Bandbreite pro Monat   
Begrenzung pro Monat liegt bei 100GB (https://www.netlify.com/pricing/#pricing-table)
#### Vorschau-Funktion bei Änderungen  
Ja eine Vorschau ist vorhanden (https://docs.netlify.com/site-deploys/overview/#deploy-previews)
#### Eigene Domain / HTTPS  
Eigene Domain können verwendet werden (https://docs.netlify.com/domains/get-started-with-domains/)
#### Upgrade-Möglichkeit (Erweiterbarkeit)  
Stuffenweise Upgrade möglich (https://www.netlify.com/pricing/#pricing-table)
#### Integrationen  
Unterstützt GitHub, GitLab, Bitbucket, or Azure DevOps repository (https://docs.netlify.com/configure-builds/overview/#connect-to-your-git-provider)



