# Vergleich von verschiedenen Hosting-Lösungen
In diesem Dokument vergleichen wir drei verschiedene Hostinganbieter. 
Die von uns ausgewählten Hostinganbieter sind Netlify, Cloudflare Pages und GitHub Pages.  
Diese werden anhand der folgenden Bewertungskriterien verglichen:
- Maximale Site-Grösse
- Bandbreite pro Monat
- Vorschau-Funktion bei Änderungen
- Eigene Domain
- Integrationen
- Upgrade-Möglichkeit (Erweiterbarkeit)

Wir haben uns für diese Bewertungspunkte entschiede, weil sie aus unserer Sicht die wichtigsten Anforderungen an einen Hostingdienst abdecken. 

## GitHub Pages
GitHub Pages ist ein Hostingdienst von GitHub der es ermöglicht, statische Webseiten direkt aus einem Git-Repository zu veröffentlichen  
#### Maximale Site-Grösse:  
Das Repository darf maximal 1 GB groß sein. (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
#### Bandbreite pro Monat:  
Es gilt ein nicht exakt definiertes Soft-Limit von ca. 100 GB pro Monat. Bei Überschreitung kann es zu Drosselung oder Sperrung kommen. 
(https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
#### Vorschau-Funktion bei Änderungen:  
Beim Durchsuchen der Dokumentation gibt es keinen hinweis auf eine Vorschau funktion. Daher nehme ich an das diese Funktion nicht vorhanden ist.  
#### Eigene Domain:  
Ja es können eigene Domain verwendet werden. (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) 
#### Upgrade-Möglichkeit (Erweiterbarkeit):  
Es gibt keine spezifischen Upgrade-Pläne für GitHub Pages. Die Hostingfunktionen erweitern sich lediglich mit einem allgemeinen GitHub-Abo. (https://github.com/pricing)
#### Integrationen:  
GitHub Pages unterstützt nur GitHub Repositorys.  

## Cloudflare Pages
Cloudflare Pages ist ein statischer Hostingdienst von Cloudflare, der es ermöglicht, Webseiten direkt aus einem Git-Repository zu veröffentlichen und global über bereitzustellen. Diese bieten automatischen Deployments und Vorschauversionen.  
#### Maximale Site-Grösse  
Die begrenzung liegt pro File auf 25MiB (Hinweis beim Hochladen).
#### Bandbreite pro Monat   
Keine Begrenzung gemäss der Webseite mit limits. (https://developers.cloudflare.com/pages/platform/limits/)
#### Vorschau-Funktion bei Änderungen  
Vorschaufunktion ist vorhanden (https://developers.cloudflare.com/pages/configuration/preview-deployments/)
#### Eigene Domain   
Eigene Domains können verwendet werden (https://developers.cloudflare.com/pages/configuration/custom-domains/)
#### Upgrade-Möglichkeit (Erweiterbarkeit)  
Stuffenweise Upgrade möglich (https://www.cloudflare.com/de-de/plans/)
#### Integrationen 
Unterstützt GitHub und GitLab (https://developers.cloudflare.com/pages/configuration/git-integration/)


## Netlify
Netlify ist eine moderne Hosting- und Entwicklungsplattform für statische und serverlose Webanwendungen. Sie unterstützt automatische Deployments aus Git-Repositories und bietet viele zusätzliche Features.
#### Maximale Site-Grösse  
Die begrenzung liegt pro File auf 25MiB (Hinweis beim Hochladen).
#### Bandbreite pro Monat   
Begrenzung pro Monat liegt bei 100GB (https://www.netlify.com/pricing/#pricing-table)
#### Vorschau-Funktion bei Änderungen  
Ja eine Vorschau ist vorhanden (https://docs.netlify.com/site-deploys/overview/#deploy-previews)
#### Eigene Domain  
Eigene Domain können verwendet werden (https://docs.netlify.com/domains/get-started-with-domains/)
#### Upgrade-Möglichkeit (Erweiterbarkeit)  
Stuffenweise Upgrade möglich (https://www.netlify.com/pricing/#pricing-table)
#### Integrationen  
Unterstützt GitHub, GitLab, Bitbucket, or Azure DevOps repository (https://docs.netlify.com/configure-builds/overview/#connect-to-your-git-provider)

## Fazit 
Die drei Hostingplattformen bieten allesamt eine zuverlässige und kostenlose Möglichkeit, statische Webseiten zu veröffentlichen. Bei unserer Recherche hat sich gezeigt, dass sich die Anbieter hauptsächlich im Funktionsumfang unterscheiden. GitHub Pages stellt die einfachste Lösung dar und bietet die geringsten Funktionalitäten, wäre für unser Projekt jedoch vollkommen ausreichend gewesen. Cloudflare Pages bietet darüber hinaus erweiterte Möglichkeiten, wie zum Beispiel unbegrenzte Bandbreite pro Monat. Netlify verfügt über den umfassendsten Funktionsumfang, inklusive der Integration mit verschiedenen Git-Plattformen sowie weitere zusätzlichen Features.

