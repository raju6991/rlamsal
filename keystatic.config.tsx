import { collection, component, config, fields } from "@keystatic/core";
import React from "react";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "raju6991",
      name: "raju6991/rlamsal",
    },
  },
  ui: {
    brand: { name: "Portfolio CMS" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "slug",
      path: "content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "publishedDate"],
      previewUrl: "/writing/{slug}",
      schema: {
        title: fields.text({ label: "Title" }),
        slug: fields.text({
          label: "Slug",
          description: "The URL slug for this post",
          validation: { length: { min: 1 } },
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/images/posts",
          publicPath: "/images/posts",
          validation: { isRequired: false },
        }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        publishedDate: fields.date({
          label: "Published Date",
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/posts",
            publicPath: "/images/posts",
          },
          componentBlocks: {
            image: component({
              label: "Image",
              preview: (props) => {
                return (
                  <div style={{ margin: "1rem 0" }}>
                    <img
                      src={props.fields.src.value}
                      alt={props.fields.alt.value}
                      style={{ width: "100%", borderRadius: "4px" }}
                    />
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      {props.fields.title.value}
                    </p>
                  </div>
                );
              },
              schema: {
                src: fields.text({ label: "Source URL" }),
                alt: fields.text({ label: "Alt text" }),
                title: fields.text({ label: "Title (optional)" }),
              },
            }),
            playground: component({
              label: "Playground Illustration",
              preview: () => (
                <div
                  style={{
                    padding: "1rem",
                    background: "#ccc",
                    borderRadius: "4px",
                  }}
                >
                  Playground Preview
                </div>
              ),
              schema: {
                type: fields.select({
                  label: "Type",
                  options: [
                    { label: "Flexbox", value: "flex" },
                    { label: "Grid", value: "grid" },
                    { label: "Animation", value: "animation" },
                  ],
                  defaultValue: "flex",
                }),
              },
            }),
            sandbox: component({
              label: "Sandbox Editor",
              preview: () => (
                <div
                  style={{
                    padding: "1rem",
                    background: "#333",
                    color: "#fff",
                    borderRadius: "4px",
                  }}
                >
                  Sandbox Code Editor
                </div>
              ),
              schema: {
                initialCode: fields.text({
                  label: "Initial Code",
                  multiline: true,
                }),
                language: fields.text({
                  label: "Language",
                  defaultValue: "css",
                }),
              },
            }),
            illustration: component({
              label: "Interactive Illustration",
              preview: () => (
                <div
                  style={{
                    padding: "1rem",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                >
                  Playground + Sandbox
                </div>
              ),
              schema: {
                initialCode: fields.text({
                  label: "Initial Code",
                  multiline: true,
                }),
                type: fields.select({
                  label: "Type",
                  options: [
                    { label: "Flexbox", value: "flex" },
                    { label: "Grid", value: "grid" },
                    { label: "Animation", value: "animation" },
                    { label: "Gradient", value: "gradient" },
                  ],
                  defaultValue: "flex",
                }),
              },
            }),
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "slug",
      path: "content/projects/*/",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "featured"],
      previewUrl: "/work",
      schema: {
        title: fields.text({
          label: "Title",
          validation: { length: { min: 1 } },
        }),
        slug: fields.text({
          label: "Slug",
          description: "The URL slug for this project",
          validation: { length: { min: 1 } },
        }),
        description: fields.text({ label: "Description", multiline: true }),
        technologies: fields.array(fields.text({ label: "Technology" }), {
          label: "Technologies",
          itemLabel: (props) => props.value,
        }),
        demoUrl: fields.text({ label: "Demo URL" }),
        githubUrl: fields.text({ label: "GitHub URL" }),
        featured: fields.checkbox({ label: "Featured" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});
