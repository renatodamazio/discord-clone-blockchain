import { client } from "../../lib/client";

const query = `*[_type == "conversations" && isDm==false] {
  roomId,
  roomName,
  "avatar": image.asset->url
}`;

export default async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);
    res.status(200).send("Successfull");
  } catch (error) {
    res.status(500).send(error);
  }
};
