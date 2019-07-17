export const STATUS = Object.freeze({
    CLEAN: 'clean',
    DIRTY: 'dirty',
    ERROR: 'error',
    SAVED: 'saved',
    SAVING: 'saving'
});

const VALIDATION_STATES = Object.freeze({
    [STATUS.CLEAN]: null,
    [STATUS.DIRTY]: 'warning',
    [STATUS.ERROR]: 'error',
    [STATUS.SAVED]: 'success',
    [STATUS.SAVING]: 'warning'
});

const GLYPHS = Object.freeze({
    [STATUS.CLEAN]: 'pencil',
    [STATUS.DIRTY]: 'pencil',
    [STATUS.ERROR]: 'floppy-remove',
    [STATUS.SAVED]: 'floppy-saved',
    [STATUS.SAVING]: 'floppy-disk'
});

export const validationStateByStatus = (status) => VALIDATION_STATES[status];

export const glyphByStatus = (status) => GLYPHS[status];
