export default {
  transformFailureMessageToImagePath: (failureMessage => {
    const dir = "diffimages";
    const REGEXP = /See diff for details:[^/]*(\/.*\.png)/;
    const path = ((failureMessage || "").match(REGEXP || / /) || [])[1];
    const relativePath = ((path || "").match(/\/src\/(.*\.png)/) || [])[1];
    return relativePath ? `${dir}/${relativePath}` : "";
  }).toString()
}
