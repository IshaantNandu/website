# -*- encoding: utf-8 -*-
from flask_sitemap import Sitemap  
from os import scandir
import markdown  
from flask import *
from markupsafe import Markup
from waitress import serve

def createApp()->Flask:
    extensions = ["markdown.extensions.extra",
                  "markdown.extensions.abbr",
                  "markdown.extensions.attr_list",
                  "markdown.extensions.def_list",
                  "markdown.extensions.fenced_code",
                  "markdown.extensions.footnotes",
                  "markdown.extensions.md_in_html",
                  "markdown.extensions.tables",
                  "markdown.extensions.admonition",
                  "markdown.extensions.legacy_attrs",
                  "markdown.extensions.legacy_em",
                  "markdown.extensions.meta",
                  "markdown.extensions.nl2br",
                  "markdown.extensions.sane_lists",
                  "markdown.extensions.smarty",
                  "markdown.extensions.toc",
                  "markdown.extensions.wikilinks",
                   "markdown_sub_sup",
                  'markdown_del_ins',
                  'kbdextension',
                  'iconfonts',
                  'markdown_checklist.extension',
                  'markdown.extensions.attr_list', 
                  'pymdownx.extra',
                  'pymdownx.superfences',
                  'pymdownx.tabbed',
                  'pymdownx.tasklist',
                  'pymdownx.inlinehilite',
                  'pymdownx.highlight',
                  'pymdownx.emoji',
                  'pymdownx.arithmatex']
    app: Flask = Flask(__name__)
    app.config['SERVER_NAME'] = 'ishaant.com'
    view_funcs = {}
    template: str = ''
    with open('/var/www/html/templates/index.html') as t:
        template = t.read()

    def create_view_func(html_content):
        return lambda: html_content

    @app.errorhandler(404)
    def page_not_found(e):return render_template('404.htm'), 404

    def routeMapping(dir='/var/www/html/templates/blogs'):

        with scandir(dir) as entries:
            for entry in entries:
                try:
                    with open(entry.path) as f:
                        print(entry.path)
                        content = template.replace('{{content}}', markdown.markdown(
                            f.read(),
                            extensions=extensions,
                            extension_configs={
        'pymdownx.highlight': {
            'use_pygments': True,  # Ensure Pygments is used
            'pygments_lang_class': True, # Explicitly add language class
            'css_class': 'highlight', # Default class for the wrapper element
            'language_prefix': '' # Default prefix for language class
        }
    }))

                        html = Markup(content)
                        view_func_name = f'view_{entry.name.replace(
                            ".", "_")}'  # Generate a unique name
                        unique_view_func = create_view_func(html)
                        app.add_url_rule(
                            f'/{entry.name.split(".")[0]}/' if not entry.name.split(".")[
                                0] == 'index' else '/',
                            endpoint=view_func_name,
                            view_func=unique_view_func)

                except Exception as e:
                    print(e)
                finally:
                    print("Registered Routes:")
                    for rule in app.url_map.iter_rules():
                        print(f"{rule}: {rule.endpoint}")
    routeMapping()
    ext = Sitemap(app=app)
    ext.app.config['SITEMAP_INCLUDE_RULES_WITHOUT_PARAMS']=True
    return app


if __name__ == '__main__':
    server = createApp()
    serve(server,host='158.69.158.109',port=8080)
