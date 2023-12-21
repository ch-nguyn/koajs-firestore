export default function getDataPrepare(doc) {
  return {
    ...doc.data(),
    id: doc.id,
    createdAt: doc.data().createdAt.toDate(),
  };
}
