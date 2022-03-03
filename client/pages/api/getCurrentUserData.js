import { client } from "../../lib/client";

export default async (req, res) => {
  const query = `*[_type == "users" && walletAddress=="${req.query.account}"] {
        name,
        "avatar": image.asset->url
      }`;
  try {
    const sanityResponse = await client.fetch(query);
    res.status(200).send(await sanityResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};
