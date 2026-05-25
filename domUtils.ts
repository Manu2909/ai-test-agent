import { Page } from 'playwright';

/**
 * Compresses the current page DOM to only structural and actionable elements.
 */
export async function getReducedHTML(page: Page): Promise<string> {
  return await page.evaluate(() => {
    const bodyClone = document.body.cloneNode(true) as HTMLElement;
    
    // 1. Remove non-visual or bloating tags
    const structuralJunk = bodyClone.querySelectorAll(
      'script, style, svg, link, noscript, iframe, head, footer, path'
    );
    structuralJunk.forEach(el => el.remove());

    // 2. Remove visually hidden or accessible-hidden elements
    const hiddenElements = bodyClone.querySelectorAll(
      '[aria-hidden="true"], [hidden], .hidden, .is-hidden'
    );
    hiddenElements.forEach(el => el.remove());

    // 3. Clean attributes recursively, leaving only relevant metadata for selector building
    const stripUnnecessaryAttributes = (element: Element) => {
      const whitelist = ['id', 'class', 'placeholder', 'name', 'type', 'role', 'data-testid', 'aria-label'];
      
      Array.from(element.attributes).forEach(attr => {
        if (!whitelist.includes(attr.name)) {
          element.removeAttribute(attr.name);
        }
      });
      
      Array.from(element.children).forEach(stripUnnecessaryAttributes);
    };

    stripUnnecessaryAttributes(bodyClone);

    return bodyClone.innerHTML.replace(/\s+/g, ' ').trim();
  });
}