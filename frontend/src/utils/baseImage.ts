const baseImage = 'data:image/png;base64,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';

export default baseImage;
