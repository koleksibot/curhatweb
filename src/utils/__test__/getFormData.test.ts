import getFormData from '../getFormData';

describe('object transform to form data', () => {
  it('should be support regular object', () => {
    const data = {
      data: 'data',
      image: 'test',
      tes: 123,
    };

    const result = new FormData();
    result.append('data', 'data');
    result.append('image', 'test');
    result.append('tes', '123');

    expect(getFormData(data)).toStrictEqual(result);
  });
  it('should be support array in object', () => {
    const data = {
      data: 'data',
      image: 'test',
      tes: 123,
      array: ['1', '2', '3'],
    };

    const result = new FormData();
    result.append('data', 'data');
    result.append('image', 'test');
    result.append('tes', '123');
    result.append('array[]', '1');
    result.append('array[]', '2');
    result.append('array[]', '3');

    expect(getFormData(data)).toStrictEqual(result);
  });

  it('should be support blob', () => {
    const data = {
      data: 'data',
      images: new Blob(),
      tes: 123,
    };

    const result = new FormData();
    result.append('data', 'data');
    result.append('images', new Blob());
    result.append('tes', '123');

    expect(getFormData(data)).toMatchObject(result);
  });

  it('should be support object in object', () => {
    const data = {
      data: 'data',
      image: 'test',
      tes: 123,
      object: {
        attr1: '1',
        attr2: '2',
        attr3: '3',
        attr4: '4',
      },
    };

    const result = new FormData();
    result.append('data', 'data');
    result.append('image', 'test');
    result.append('tes', '123');
    result.append(
      'object',
      JSON.stringify({
        attr1: '1',
        attr2: '2',
        attr3: '3',
        attr4: '4',
      }),
    );

    expect(getFormData(data)).toMatchObject(result);
  });
});
