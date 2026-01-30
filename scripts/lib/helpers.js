export function dieHardLog(force, ...args) {
  try {
    const isDebugging = game.modules.get('_dev-mode')?.api?.getPackageDebugValue('foundry-die-hard');

    if (force || isDebugging) {
      console.log('DieHard', '|', ...args);
    }
  } catch (e) {}
}

export function insertAfter(newNode, existingNode) {
  if (!existingNode || !existingNode.parentNode) {
    console.warn("[Die Hard] insertAfter: existingNode missing, cannot insert", { newNode, existingNode });
    return false;
  }
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  return true;
}


export function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
