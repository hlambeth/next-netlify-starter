export default async function health(req, res) {
    return await res.status(200).json('success')
}