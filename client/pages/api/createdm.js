import { client } from "../../lib/client";

export default async (req, res) => {
  const { userAddress } = req.body;

  const conversationDoc = {
    _type: "conversations",
    _id: `${userAddress}-dm`,
    isDm: true,
    roomId: userAddress,
    userReference: {
      _key: userAddress,
      _ref: `${userAddress}-user`,
      _type: "refrence",
    },
  };

  try {
    await client.createIfNotExists(conversationDoc);
    res.status(200).send("Successfull");
  } catch (error) {
    res.status(500).send(error);
  }
};
