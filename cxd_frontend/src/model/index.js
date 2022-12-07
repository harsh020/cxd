import * as tf from '@tensorflow/tfjs';

import MODEL_HELPERS from 'model/helpers';
import HELPERS from 'utils/helpers';    


const diagnose = async (imgURL, callback) => {
    const mean = new tf.tensor([[[159.66405, 159.66405, 159.66405]]])
    const std = new tf.tensor([[[50.815277, 50.815277, 50.815277]]])

    var image = await HELPERS.image.dataURL2Tensor(imgURL);
    image = tf.expandDims(image, 0);
    image = tf.div(tf.sub(image, mean), std);

    const model = await MODEL_HELPERS.model.load_chexnet();
    var result = await model.predict(image).data()
    result = MODEL_HELPERS.model.diagnosisResult(result);
    HELPERS.localStorageServices.storeData('diagnosis', result);
    callback();

    return result;
}

export default diagnose;