import express from "express";
import _ from "lodash";

const app = express();
const PORT = process.env.PORT || 2000;

import data from "./DataExtraction.js";

const a = {
  tag: data.data.name,
  list: data.data.recent.sections.map((i) => {
    return i.layout_content.medias.map((j) => {
      return {
        user: j.media.user,
        location: j.media.location,
        caption: j.media.caption,
        comments: j.media.comments,
      };
    });
  }),
};

app.get("/", (req, res) => res.json(_.flatMap(a.list)));

app.listen(PORT, () =>
  console.log(`server is Running on port: http://localhost:${PORT}`)
);

23339130700;
