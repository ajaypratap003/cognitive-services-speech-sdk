//
// copyright (c) Microsoft. All rights reserved.
// See https://aka.ms/csspeech/license201809 for the full license information.
//

import { PropertyCollection, RecognitionResult, ResultReason, SpeechRecognitionResult } from "./Exports";

/**
 * Intent recognition result.
 * @class
 */
export class IntentRecognitionResult extends SpeechRecognitionResult {
    private privIntentId: string;

    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param intentId - The intent id.
     * @param resultId - The result id.
     * @param reason - The reason.
     * @param text - The recognized text.
     * @param duration - The duration.
     * @param offset - The offset into the stream.
     * @param errorDetails - Error details, if provided.
     * @param json - Additional Json, if provided.
     * @param properties - Additional properties, if provided.
     */
    constructor(intentId?: string, resultId?: string, reason?: ResultReason, text?: string, duration?: number, offset?: number, errorDetails?: string, json?: string, properties?: PropertyCollection) {
        super(resultId, reason, text, duration, offset, errorDetails, json, properties);

        this.privIntentId = intentId;
    }

    /**
     * A String that represents the intent identifier being recognized.
     * @member IntentRecognitionResult.prototype.intentId
     * @returns A String that represents the intent identifier being recognized.
     */
    public get intentId(): string {
        return this.privIntentId;
    }
}