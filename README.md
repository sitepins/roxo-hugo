## 🌟 Roxo Hugo

A hugo powered static website.

### Prerequisites

To contribute effectively, you'll need some prerequisites installed on your machine:

- **Hugo Extended v0.160+**: [[https://gohugo.io/installation/](https://gohugo.io/installation/)]
- **Node v18+**: [[https://nodejs.org/en/download/](https://nodejs.org/en/download/)]
- **Go v1.22+**: [[https://go.dev/doc/install](https://go.dev/doc/install)]

### Installation (as a theme)

To use Roxo in a new Hugo site, install the theme and configure your site with `hugo.toml` (not `config.toml`). The theme expects the Hugo config file to be named `hugo.toml`; using `config.toml` will result in a 404 / "page not found".

```bash
hugo new site mysite
cd mysite
git submodule add https://github.com/furioustheme/roxo-hugo.git themes/roxo-hugo
```

Then create `hugo.toml` at the root of your site (copy `themes/roxo-hugo/exampleSite/hugo.toml` as a starting point) and set:

```toml
theme = "roxo-hugo"
```

Run the site:

```bash
hugo server
```

### Install Dependencies

Install all the necessary dependencies using the following command:

```bash
yarn install
```

### Project Setup

To set up the project, run the following command:

```bash
yarn project-setup
```

### Development Command

Start the development server using the following command:

```bash
yarn dev
```

### Preview Command

Start the production server to preview your changes and test functionality:

```bash
yarn preview
```
