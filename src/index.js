import { Transformer } from "@parcel/plugin";
import Markdoc from "@markdoc/markdoc";

export default new Transformer({
  async transform({ asset }) {
    let code = await asset.getCode();

    const ast = Markdoc.parse(code);
    const content = Markdoc.transform(ast);

    asset.type = "js";
    asset.setCode(`export default ${JSON.stringify(content)}`);

    return [asset];
  },
});
