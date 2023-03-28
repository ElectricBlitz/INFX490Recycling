import { Comment } from './comment';

describe('Comment', () => {
  it('should create an instance', () => {
    expect(new Comment(0,"test","test")).toBeTruthy();
  });
});
