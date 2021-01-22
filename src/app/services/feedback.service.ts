import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ISendFeedbackDTO {
  rating: number;
  comment: string;
}

const fakeHttpClient = {
  post: (_url, data) => {
    console.info('Request send with:', data);
    return timer(1000).pipe(
      map(() => {
        throw new Error();
        return;
      })
    );
  },
};

@Injectable()
export class FeedbackService {
  sendFeedback(data: ISendFeedbackDTO): Observable<void> {
    // Normally this url should be provided with environment variables
    return fakeHttpClient.post(
      `${environment.apiUrl}/${environment.sendFeedbackUrl}`,
      data
    );
  }
}
