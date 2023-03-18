import { Injectable } from "@nestjs/common";
import { Results, Content, User } from "../models";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class RenderService {
  async getInjectedHtml(fileName: string) {
    const rootPath = path.resolve(__dirname, "../..", "uploads");
    const fileData = await fs.promises.readFile(path.join(rootPath, fileName), {
      encoding: "utf-8",
    });
    // const scriptSrc = 'path/to/script.js';

    // Load the HTML using Cheerio
    const $ = cheerio.load(fileData);

    // Inject the script tag into the head element
    // $("head").append(`<script src="${scriptSrc}"></script>`);
    $("head").append(`<script>alert(1)</script>`);
    return $.html();
  }
}
