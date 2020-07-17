module.exports = {
  name: 'tutorials',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tutorials',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
