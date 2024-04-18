import * as stream from "node:stream";

import { createReadableStreamFromReadable } from "@react-router/node";
// @ts-expect-error - no types
import RSD from "react-server-dom-diy/server";

export function renderToReadableStream(data: unknown) {
  const passthrough = new stream.PassThrough();
  const { pipe } = RSD.renderToPipeableStream(data);
  pipe(passthrough);
  return createReadableStreamFromReadable(passthrough);
}
