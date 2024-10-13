<script lang="ts">
  export let beers: Beer[] = [
    { name: "IPA", ibu: 70, fruitiness: 40 },
    { name: "Pale Ale", ibu: 40, fruitiness: 60 },
  ];
  const gridSize = 1000; // グラフ全体のサイズ
</script>

<svelte:head>
  <title>Beer Mapper</title>
  <meta name="description" content="Beer Mapper app" />
</svelte:head>

<section class="map" style="width: {gridSize}px; height: {gridSize}px;">
  <svg width={gridSize} height={gridSize} style="border: 1px solid #ddd;">
    <!-- グリッドの描画 -->
    {#each Array(25).fill(0) as _, i}
      <line x1={i * 50} y1="0" x2={i * 50} y2={gridSize} stroke="#eee" />
      <line
        x1="0"
        y1={gridSize - i * 50}
        x2={gridSize}
        y2={gridSize - i * 50}
        stroke="#eee"
      />
    {/each}

    <!-- Y軸 -->
    <line
      x1="500"
      y1="0"
      x2="500"
      y2={gridSize}
      stroke="black"
      stroke-width="5"
    />
    <!-- X軸 -->
    <line
      x1="0"
      y1={gridSize - 500}
      x2={gridSize}
      y2={gridSize - 500}
      stroke="black"
      stroke-width="5"
    />

    <!-- ビールをプロット -->
    {#each beers as beer}
      <!-- 苦味を X 軸、フルーティさを Y 軸に変換 -->
      <circle
        cx={50 + beer.ibu * 4}
        cy={gridSize - 50 - beer.fruitiness * 4}
        r="5"
        fill="blue"
      />
      <!-- ビール名を表示 -->
      <text
        x={50 + beer.ibu * 4 + 10}
        y={gridSize - 50 - beer.fruitiness * 4}
        font-size="10"
      >
        {beer.name}
      </text>
    {/each}
  </svg>
</section>

<style>
  .map {
    background-color: rgba(255, 255, 255, 0.5);
  }

  line {
    color: black;
  }
</style>
