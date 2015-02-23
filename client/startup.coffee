Meteor.startup ->
  # Reshape DOM: put back title and meta elements in the head.
  # style and script tags can leave in the body tag.
  $head = $ 'head'
  for tag in ['meta', 'title']
    $tags = $ tag
    $head.append $tags.clone()
    $tags.remove()
