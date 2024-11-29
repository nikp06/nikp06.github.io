# Add content
The following commands are using the archetypes set in themes/hello-friend-ng/archetypes:
```
hugo new posts/test.md
hugo new projects/test.md
```

# To view site on localhost
```
hugo server --theme hello-friend-ng
```

# Some Hugo shortcodes
reference a link to another site:
`[Post 1]({{% ref "projects#education" %}})`

permalink:
`[Post 1]({{% relref "projects" %}})`

youtube
`{{< youtube ZVSmPikcIP4 >}}`

twitter
`{{< twitter user="johanpeitz" id="1412823539875516421" >}}`


# Change HTML on the theme level
The general structure of the pages is defined in the /themes/hello-friend-ng/layouts/_default and /themes/hello-friend-ng/layouts/_partials directories.
These can be overwritten with html files in for example layouts/projects, where list.html defines, how the list of projects should be created differently, than for example the posts list.

# Change Shortcodes on the theme level
New Shortcodes can be included in /themes/hello-friend-ng/shortcodes.
New shortcodes usage examples:
```
{{< github-api url="https://api.github.com/users/nikp06/starred?per_page=3" >}}

{{< github-button button="follow" user="nikp06" >}}
{{< github-button button="star"   user="nikp06" repo="subwAI" count="true" >}}

{{< repo-stars data="nikp06/subwAI" >}}
```
