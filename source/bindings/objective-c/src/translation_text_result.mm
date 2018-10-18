//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//

#import "speechapi_private.h"

@implementation SPXTranslationRecognitionResult
{
    std::shared_ptr<TranslationImpl::TranslationRecognitionResult> resultImpl;
}

- (instancetype)init:(std::shared_ptr<TranslationImpl::TranslationRecognitionResult>)resultHandle
{
    self = [super init :resultHandle];
    resultImpl = resultHandle;
    
    auto resultInMap = resultImpl->Translations;
    _translations = [[NSMutableDictionary alloc] initWithCapacity:resultInMap.size()];
    for (auto it : resultInMap)
        [_translations setValue:[NSString StringWithStdString:it.second] forKey:[NSString StringWithStdString:it.first]];

    return self;
}

- (instancetype)initWithError:(NSString *)message
{
    self = [super initWithError:message];
    return self;
}

@end