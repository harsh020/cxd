import * as tf from '@tensorflow/tfjs';

const all_labels = [
    'Atelectasis', 
    'Cardiomegaly',
    'Consolidation', 
    'Edema', 
    'Effusion', 
    'Emphysema', 
    'Fibrosis', 
    'Hernia',
    'Infiltration', 
    'Mass', 
    'Nodule', 
    'Pleural_Thickening', 
    'Pneumonia',
    'Pneumothorax'
]

const MODEL_HELPERS = {
    model: {
        load_chexnet: async () => {
            // const handler = tfn.io.fileSystem("..");
            const chexnet = await tf.loadLayersModel('/models/pre_trained/chexnet/model.json');

            return chexnet;
        },

        diagnosisResult: (array) => {
            let result = {};
            for(let i=0; i<all_labels.length; i++) {
                result[all_labels[i]] = parseFloat(array[i].toFixed(4));
            }
            return result;
        },
    }
}

export default MODEL_HELPERS;