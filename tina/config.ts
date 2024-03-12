import { defineConfig } from "tinacms"

import { FeaturedIcons } from "../components/icons"
import { IconSelector } from "./icon-select"

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || "edf490a6-bb37-45ca-94a9-da10867a165d",
  token: process.env.TINA_TOKEN || "75ddd6f44d0ecbd289441ad8b71a85a1f428adc7",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            return "/"
          },
        },
        fields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [

              
              
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                  {
                    name: "links",
                    label: "Links",
                    type: "object",
                    list: true,
                    fields: [
                      { type: "string", name: "link" },
                      { type: "string", name: "label" },
                      {
                        type: "string",
                        name: "style",
                        options: ["simple", "button"],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'PageBlocksLogoCarousel', 
                label: 'Logo Carousel',
                fields: [
                  {
                    label: 'Logos',
                    name: 'logos',
                    type: 'object',
                    list: true,
                    fields: [
                      { type: 'string', label: 'Image Source', name: 'src' },
                      { type: 'string', label: 'Alt Text', name: 'alt' },
                      { type: 'string', label: 'Website URL', name: 'url' },
                    ],
                  },
                ],
              },
              
              {
                label: 'Formulario de Contacto',
                name: 'contactForm',
                fields: [
                  {
                    label: 'ID del Formulario',
                    name: 'formId',
                    type: 'string',
                  },
                  {
                    label: 'Campos del Formulario',
                    name: 'formFields',
                    type: 'object',
                    fields: [
                      {
                        label: 'Etiqueta del Campo',
                        name: 'label',
                        type: 'string',
                      },
                      {
                        label: 'Nombre del Campo',
                        name: 'name',
                        type: 'string',
                      },
                      {
                        label: 'Tipo del Campo',
                        name: 'type',
                        type: 'string',
                        options: ['string', 'email', 'textarea'],
                      },
                    ],
                  },
                ],
              },
              
              {
                name: "card",
                label: "Card right",
                fields: [
                  {
                    name: "image",
                    label: "Image",
                    type: "image",
                  },
                  {
                    name: "text",
                    label: "Text",
                    type: "rich-text",
                  },
                ],
              },

              

              {
                name: "PageBlocksCard_left",
                label: "Card left",
                fields: [
                  {
                    name: "text",
                    label: "Text",
                    type: "rich-text",
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "image",
                  },
                ],
              },

              {
                name: "techComponent",
                label: "Tech Component",
                fields: [
                  {
                    name: "mainText",
                    label: "Main Text",
                    type: "rich-text",
                  },
                  {
                    name: "images",
                    label: "Images",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "image",
                        label: "Image",
                        type: "image",
                      },
                      {
                        name: "text",
                        label: "Text",
                        type: "string",
                      },
                    ],
                  },
                ],
              },

              
              {
                name: "featureList",
                label: "Feature List",
                fields: [
                  { name: "byline", type: "string" },
                  {
                    name: "message",
                    type: "rich-text",
                  },
                  {
                    name: "features",
                    label: "Features",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label }
                      },
                      defaultItem: {
                        icon: Object.keys(FeaturedIcons)[0],
                        label: "Llama Feature",
                        description: "This is a feature",
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        options: Object.keys(FeaturedIcons),
                        ui: {
                          component: IconSelector,
                        },
                      },
                      { type: "string", name: "label" },
                      {
                        type: "string",
                        name: "description",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: "featuredReading",
                label: "Featured Reading",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string",
                  },
                  {
                    name: "featuredPost",
                    label: "Featured Post",
                    type: "reference",
                    collections: ["post"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Post",
        path: "content/posts",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ["author"],
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
          {
            name: "description",
            label: "Description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true,
          },
          {
            name:"nombre",
            label:"nombre",
            type:"string"
          },
        ],
      },
      {
        name: "author",
        label: "Author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            name: "name",
            label: "Name",
            type: "string",
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
        ],
      },
      {
        name: "nav",
        label: "Nav",
        path: "content/nav",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "links",
            label: "Links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.label }
              },
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "link", label: "Link" },
            ],
          },
        ],
      },
    ],
  },
})
