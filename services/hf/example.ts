import { HfInference, SentenceSimilarityOutput } from "@huggingface/inference";

const HF_TOKEN = "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";

const inference = new HfInference(HF_TOKEN);

export async function CompareSimilarity(source_sentence: string, sentences: string[]): Promise<SentenceSimilarityOutput> {
    var result = await inference.sentenceSimilarity({
        //model: "sentence-transformers/paraphrase-xlm-r-multilingual-v1",
        inputs: {
            source_sentence: source_sentence,
            sentences: sentences
        }
    });

    return result;
}
