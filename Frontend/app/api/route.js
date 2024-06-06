// import { parse } from "parse5";

// export async function GET(req) {
//   const PLACE_URL =
//     "https://www.google.com/maps/place/Rabin's+Photography%C2%AD/@22.5941259,88.3917508,17z/data=!4m18!1m9!3m8!1s0x3a0277b182fd5f73:0xc2d04a221fb9ff27!2sRabin's+Photography%C2%AD!8m2!3d22.5941259!4d88.3943257!9m1!1b1!16s%2Fg%2F11kkmt3_np!3m7!1s0x3a0277b182fd5f73:0xc2d04a221fb9ff27!8m2!3d22.5941259!4d88.3943257!9m1!1b1!16s%2Fg%2F11kkmt3_np?entry=ttu";

//   try {
//     const googleResponse = await fetch(PLACE_URL);
//     const html = await googleResponse.text();
//     const document = parse(html);

//     const reviews = [];
//     parseReviews(document, reviews);

//     return Response.json({ reviews, document }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return Response.json({ message: error.message }, { status: 500 });
//   }
// }

// function parseReviews(node, reviews) {
//   if (
//     node.nodeName === "div" &&
//     getAttributeValue(node, "class") === "review"
//   ) {
//     let text = "";
//     let rating = "";
//     if (node.childNodes) {
//       Array.from(node.childNodes).forEach((childNode) => {
//         if (
//           childNode.nodeName === "div" &&
//           getAttributeValue(childNode, "class") === "review-text"
//         ) {
//           text = getTextContent(childNode);
//         }
//         if (
//           childNode.nodeName === "div" &&
//           getAttributeValue(childNode, "class") === "review-rating"
//         ) {
//           rating = getTextContent(childNode);
//         }
//       });
//     }
//     reviews.push({ text, rating });
//   }

//   if (node.childNodes) {
//     Array.from(node.childNodes).forEach((childNode) => {
//       parseReviews(childNode, reviews);
//     });
//   }
// }

// function getAttributeValue(node, attributeName) {
//   for (let attr of node.attrs) {
//     if (attr.name === attributeName) {
//       return attr.value;
//     }
//   }
//   return null;
// }

// function getTextContent(node) {
//   if (node.childNodes && node.childNodes.length > 0) {
//     return node.childNodes[0].value;
//   }
//   return "";
// }

export async function GET(req) {
  return Response.json({ message: "Hello, world!" }, { status: 200 });
}
