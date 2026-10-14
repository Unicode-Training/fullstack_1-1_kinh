<h1>Học Laravel: {!!$title!!} 111</h1>
<ul>
    @foreach ($products['products'] as $product)
    <li>{{$product}}</li>
    @endforeach
</ul>
<ul>
    @foreach ($products['attributes'] as $attribute)
    <li>{{$attribute}}</li>
    @endforeach
</ul>
