//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : BaseResponseModel.ts                                          //
//  Project   : mdweb                                                         //
//  Date      : 2025-03-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2025                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------
export class BaseResponse
{
  // ---------------------------------------------------------------------------
  public success: boolean   = false;
  public statusCode: number = 0;
  public timestamp: number  = Date.now();
  //
  public errorMessage: string = "";
  public errorCode: number    = 0;
  public errorPayload: any    = {};

  // ---------------------------------------------------------------------------
  constructor({
    success      = true,
    timestamp    = Date.now(),
    statusCode   = 0,
    errorMessage = "",
    errorCode    = 0,
    errorPayload = {},
  }: Partial<BaseResponse> = {})
  {
    this.success    = success;
    this.statusCode = statusCode;
    this.timestamp  = timestamp;
    //
    this.errorMessage = errorMessage;
    this.errorCode    = errorCode;
    this.errorPayload = errorPayload;
  }
}

// -----------------------------------------------------------------------------
export default BaseResponse;
