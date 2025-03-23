import mongoose from "mongoose";

const CertificadoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  file: { type: String, required: true }, // URL do arquivo salvo no servidor ou em storage
});

export default mongoose.models.Certificado || mongoose.model("Certificado", CertificadoSchema);
